import { useEffect } from "react";
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  UseFormProps,
  FieldValues,
  Resolver,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type ServerErrors<T> = {
  [Property in keyof T]: string;
};

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  fieldErrors?: any[] | null;
  formError?: string | string[] | null | any;
  serverError?: ServerErrors<Partial<TFormValues>> | null;
  resetValues?: any | null;
  className?: string;
  schema?: Yup.ObjectSchema<TFormValues>; // Schema agora é opcional
};

export const Form = <TFormValues extends FieldValues = Record<string, any>>({
  onSubmit,
  children,
  useFormProps,
  fieldErrors,
  formError,
  resetValues,
  className,
  schema,
  ...formProps
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...useFormProps,
    // Aplica o resolver apenas se schema estiver definido
    resolver: schema
      ? (yupResolver(schema) as unknown as Resolver<TFormValues>)
      : undefined,
  });

  useEffect(() => {
    if (resetValues) {
      methods.reset(resetValues);
    }
  }, [resetValues, methods]);

  return (
    <form
      noValidate
      onSubmit={methods.handleSubmit(onSubmit)}
      {...formProps}
      className={className}
    >
      {children(methods)}
    </form>
  );
};
