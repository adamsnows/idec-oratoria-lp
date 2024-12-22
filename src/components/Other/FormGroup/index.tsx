import cn from "@/utils/class-names";

interface FormGroupProps {
  title: React.ReactNode;
  className?: string;
  description?: string;
  children?: React.ReactNode;
  inputClassName?: string;
  errors?: any;
}

export default function FormGroup({
  title,
  className,
  description,
  children,
  inputClassName,
  errors,
}: FormGroupProps) {
  return (
    <div className={cn("grid @3xl:grid-cols-12", className)}>
      <div className="col-span-full @4xl:col-span-4">
        <h4 className="text-base font-medium ">{title}</h4>
        {description && <p className="mt-2">{description}</p>}
      </div>
      {children && (
        <div
          className={
            inputClassName
              ? inputClassName
              : "col-span-full grid @2xl:grid-cols-2 @4xl:col-span-8 @4xl:gap-5 xl:gap-7 border-none ring-0"
          }
        >
          {children}
        </div>
      )}
      {errors && <span className="text-xs mt-1 text-red-500">{errors}</span>}
    </div>
  );
}
