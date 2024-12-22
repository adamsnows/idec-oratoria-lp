import { object, string } from "yup";

export const leadsSchema = object().shape({
  name: string().required("Precisamos do seu nome aqui!"),
  email: string().email("Seu e-mail precisa ser válido!"),
  user_wpp: string()
    .transform((value) => value.replace(/\D/g, ""))
    .required("Seu WhatsApp é obrigatório!"),
  company: string(),
});
