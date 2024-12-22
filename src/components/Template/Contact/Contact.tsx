import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "@/validators/sendEmail";
import Swal from "sweetalert2";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { SendEmailInterface } from "@/interfaces/SendEmailInterface";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendEmailInterface>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SendEmailInterface> = (data) => {
    const templateParams = {
      name: data.name,
      subject: data.subject,
      message: data.message,
      email: data.email,
      url: window.location.href,
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error(
        "Variáveis de ambiente não estão definidas corretamente."
      );
    }

    emailjs
      .send(
        serviceId.toString(),
        templateId.toString(),
        templateParams,
        publicKey.toString()
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sua mensagem foi enviada com sucesso! Obrigado",
            showConfirmButton: false,
            width: 600,
            padding: "3em",
            color: "#fff",
            background: "#0b0d0e",
            backdrop: "rgba(0,0,0,0.4)",
            timer: 1500,
          });
          router.push("/");
        },
        (err) => {
          console.log("ERROR", err);
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex flex-col h-screen text-center xl:text-left mb-20 lg:mb-0 bg-white text-black"
    >
      <div className="container mt-20 z-[10]">
        {/* <div className="border-accent w-full mb-3 border-b-2 -ms-10" /> */}
        <span className="text-black text-4xl font-ltWave">CONTATO</span>
      </div>
      <div className="container mx-auto py-10 xl:pb-10 flex flex-col items-center xl:flex-row gap-x-6 flex-1 mt-14">
        <div className="w-full">
          <div className="flex w-full flex-1 flex-col gap-8">
            <div className="flex flex-col-reverse xl:flex-row gap-4 w-full">
              <div
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 w-full max-w-[440px]"
              >
                <div className="flex flex-col gap-3 ">
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        placeholder="Nome:"
                        className={
                          errors.name
                            ? "input border-accent "
                            : "input border-black placeholder:text-gray-500"
                        }
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        placeholder="Email:"
                        className={
                          errors.email
                            ? "input border-accent"
                            : "input border-black placeholder:text-gray-500"
                        }
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        placeholder="WhatsApp:"
                        className={
                          errors.subject
                            ? "input border-accent "
                            : "input border-black placeholder:text-gray-500"
                        }
                        {...field}
                      />
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg backdrop-blur-sm btn  bg-black w-full transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto text-gray-300  "
                >
                  <span className="transition-all duration-300">ENVIAR</span>
                </button>
              </div>

              <div className="flex flex-col gap-4 mx-auto relative xl:h-[450px] xl:w-[550px]">
                <img
                  src="/selos/escudo.png"
                  alt=""
                  className="absolute top-[-150px]"
                />
                <div className="mx-auto">
                  <span>
                    Ao preencher o formulário ao lado
                    <br /> você estará dando o primeiro passo
                    <br /> rumo à sua jornada de transformação.
                  </span>
                  <div className="flex flex-col mt-10">
                    <span className="flex items-center gap-2 font-thin text-xs">
                      <FaWhatsapp className="text-accent text-lg" /> +55 11
                      91351-9291
                    </span>
                    <span className="flex items-center gap-2 font-thin text-xs">
                      <CiMail className="text-accent text-lg" />
                      contato@idecbrasil.com.br
                    </span>
                    <div className="flex gap-4 text-accent text-3xl mt-8">
                      <FaInstagram /> <FaYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
