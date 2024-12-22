import { Button } from "rizzui";
import cn from "@/utils/class-names";
import React, { ReactNode } from "react";

interface FormFooterProps {
  className?: string;
  altBtnText?: string;
  submitBtnText?: string;
  isLoading?: boolean;
  type?: string;
  typeButton?: "submit" | "button" | "reset";
  children?: ReactNode;
  onSubmit?: (data: any) => void;
  handleAltBtn?: () => void;
  handleSaveButton?: () => void;
  isSubmitDisabled?: boolean; // Adicione a propriedade para desativar o botão de envio
}

export const negMargin = "-mx-4 md:-mx-5 lg:-mx-6 3xl:-mx-8 4xl:-mx-10";

export default function FormFooter({
  isLoading,
  altBtnText = "",
  submitBtnText = "Submit",
  className,
  handleAltBtn,
  type = "normal",
  handleSaveButton,
  typeButton = "submit",
  onSubmit,
  children,
  isSubmitDisabled = false, // Defina um valor padrão para a propriedade
}: FormFooterProps) {
  return (
    <div
      className={cn(
        `sticky bottom-0 left-0 right-0 z-10 -my-10  flex items-center justify-end gap-4  px-4 py-4 md:px-5 lg:px-6 3xl:px-8 4xl:px-10 `,
        className,
        negMargin
      )}
    >
      {altBtnText && (
        <Button
          variant="outline"
          className="w-full @xl:w-auto bg-primary text-white hover:text-white border-none"
          onClick={handleAltBtn}
        >
          {altBtnText}
        </Button>
      )}
      {children}
      <Button
        onSubmit={onSubmit}
        variant="flat"
        type={typeButton}
        isLoading={isLoading}
        onClick={handleSaveButton}
        className="w-full @xl:w-auto bg-accent text-white font-bold"
        disabled={isSubmitDisabled} // Desativa o botão de envio se o formulário não for válido
      >
        {submitBtnText}
      </Button>
    </div>
  );
}
