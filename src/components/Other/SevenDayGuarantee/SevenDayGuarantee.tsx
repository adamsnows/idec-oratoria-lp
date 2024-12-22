export default function SevenDayGuarantee() {
  return (
    <div className="relative flex flex-col items-center text-center text-black my-20 px-4">
      <div className="rounded-full border-2 border-solid border-accent sm:p-8 lg:p-10 mb-10">
        <svg
          viewBox="0 0 256 256"
          id="check"
          width={100}
          height={100}
          className="p-[15px] lg:p-0"
        >
          <rect width="120" height="120" fill="none"></rect>
          <polyline
            fill="none"
            stroke="#ffc70c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            points="216 72.005 104 184 48 128.005"
          ></polyline>
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <p className="mb-5 sm:text-lg lg:text-2xl max-w-[800px] uppercase font-bold">
          {" "}
          Se você efetuou a compra, e o SMVZap não atendeu às suas expectativas,{" "}
          <span className="bg-accent text-black min-w-4">
            nós devolvemos 100% do seu investimento
          </span>{" "}
          sem questionamento.{" "}
        </p>
      </div>
    </div>
  );
}
