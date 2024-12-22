import { ActionIcon, Button, Text } from "rizzui";
import { PiXBold } from "react-icons/pi";

import { doc, setDoc } from "firebase/firestore";

import { Controller } from "react-hook-form";
import { useState } from "react";
import _ from "lodash";

import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { Form } from "../Form";
import FormGroup from "../FormGroup";
import FormFooter from "../FormFooter";
import Image from "next/image";
import { createClickUpTask } from "@/utils/create-task";
import { leadsSchema } from "./leadsValidation";
import Link from "next/link";

export default function LeadsCaptureModal({
  onClose,
  license,
}: {
  onClose?: () => void;
  license?: any;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleSubmit = async (data: any, redirectToExtension: boolean) => {
    setIsLoading(true);
    const uuid = uuidv4();
    const hash = crypto.createHash("md5").update(uuid).digest("hex");

    const infoToSubmit = {
      origin_date: new Date().toISOString(),
      ...data,
    };


    try {
      await createClickUpTask(data);
    } catch (error) {
      console.error("Erro ao criar tarefa no ClickUp:", error);
    }

    setIsLoading(false);
    setFormData(data);

    if (redirectToExtension) {
      window.open(
        "https://wa.me/5511951920556?text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20o%20SMVZAP"
      );
    } else {
      openPaymentWindow();
    }

    if (onClose) {
      onClose();
    }
  };

  const openPaymentWindow = () => {
    if (formData) {
      window.open(
        `${license.link}?name=${formData.name}&phone=${formData.user_wpp}&email=${formData.email}`
      );
    }
  };

  return (
    <>
      <div className="flex items-center border-gray-200 justify-between border-b px-5 border-opacity-10 py-4 text-center text-[#fffc]">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/smv/smvzap.png"
            height={200}
            width={200}
            alt="Logo SMVZap"
          />
          <Text as="b" className=" text-center font-lexend">
            <>
              Preencha os dados abaixo e instale o SMVZAP no seu{" "}
              <b className="text-yellow-500">WhatsApp Web!</b>
            </>
          </Text>
        </div>
        <ActionIcon
          variant="text"
          size="sm"
          className="ms-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <PiXBold className="h-5 w-5" />
        </ActionIcon>
      </div>

      <Form
        schema={leadsSchema}
        onSubmit={(data) => handleSubmit(data, true)}
        className="h-full @container"
        useFormProps={{
          mode: "onChange",
          shouldFocusError: true,
          reValidateMode: "onBlur",
          shouldUnregister: false,
          criteriaMode: "firstError",
        }}
      >
        {({ register, control, formState: { errors } }) => {
          return (
            <>
              <div className="mx-auto grid w-full max-w-screen-2xl p-5 text-[#fffc]">
                <FormGroup
                  title="Seu nome e sobrenome"
                  errors={errors.name?.message}
                >
                  <input
                    required
                    className="bg-transparent border-gray-200 border-opacity-10 focus:ring-0 focus:border-accent rounded text-sm bg-white text-gray-500 "
                    {...register("name")}
                  />
                </FormGroup>
                <FormGroup
                  title="Seu melhor email"
                  className="pt-2"
                  errors={errors.email?.message}
                >
                  <input
                    required
                    className="outline-none bg-transparent border-gray-200 border-opacity-10 focus:ring-0 focus:border-accent rounded text-sm bg-white text-gray-500"
                    {...register("email")}
                  />
                </FormGroup>
                <FormGroup
                  title="Empresa"
                  className="pt-2"
                  errors={errors.company?.message}
                >
                  <input
                    required
                    className="outline-none bg-transparent border-gray-200 border-opacity-10 focus:ring-0 focus:border-accent rounded text-sm bg-white text-gray-500"
                    {...register("company")}
                  />
                </FormGroup>
                <FormGroup
                  title="Seu WhatsApp com DDD"
                  className="pt-2"
                  inputClassName="outline-none bg-transparent border-gray-500 border-opacity-50 focus:ring-0 focus:border-accent"
                  errors={errors.user_wpp?.message}
                >
                  <Controller
                    name="user_wpp"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        required
                        placeholder="(DDD) 00000-0000"
                        type="tel"
                        className="outline-none bg-transparent border-gray-200 border-opacity-10 focus:ring-0 focus:border-accent w-full text-sm rounded bg-white text-gray-500"
                        {...register("user_wpp")}
                      />
                    )}
                  />
                </FormGroup>
              </div>
              <div className="px-5 pb-2 w-full">
                <Button
                  isLoading={isLoading}
                  className="bg-[#ffc70c] text-white py-3 w-full text-sm mx-auto px-4 rounded-md font-extrabold focus:bg-[#ffc70c]"
                  type="submit"
                >
                  DESEJO TESTAR A EXTENSÃO!
                </Button>
                <div className="mb-8" />
                <FormFooter
                  isLoading={isLoading}
                  submitBtnText="ASSINAR AGORA!"
                  type="modal"
                  onSubmit={(data) => handleSubmit(data, false)}
                />
                <Text className="text-xs block mt-10 text-center">
                  Ao clicar no botão, você concorda com nossos Termos de uso e
                  Política de Privacidade, incluindo o uso de cookies e o envio
                  de comunicações.
                </Text>
              </div>
            </>
          );
        }}
      </Form>
    </>
  );
}
