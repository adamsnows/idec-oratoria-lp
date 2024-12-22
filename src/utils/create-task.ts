import toast from "react-hot-toast";

export const brazilStates = [
  { estado: "AC", ddds: ["68"] },
  { estado: "AL", ddds: ["82"] },
  { estado: "AP", ddds: ["96"] },
  { estado: "AM", ddds: ["92", "97"] },
  { estado: "BA", ddds: ["71", "73", "74", "75", "77"] },
  { estado: "CE", ddds: ["85", "88"] },
  { estado: "DF", ddds: ["61"] },
  { estado: "ES", ddds: ["27", "28"] },
  { estado: "GO", ddds: ["62", "64"] },
  { estado: "MA", ddds: ["98", "99"] },
  { estado: "MT", ddds: ["65", "66"] },
  { estado: "MS", ddds: ["67"] },
  { estado: "MG", ddds: ["31", "32", "33", "34", "35", "37", "38"] },
  { estado: "PA", ddds: ["91", "93", "94"] },
  { estado: "PB", ddds: ["83"] },
  { estado: "PR", ddds: ["41", "42", "43", "44", "45", "46"] },
  { estado: "PE", ddds: ["81", "87"] },
  { estado: "PI", ddds: ["86", "89"] },
  { estado: "RJ", ddds: ["21", "22", "24"] },
  { estado: "RN", ddds: ["84"] },
  { estado: "RS", ddds: ["51", "53", "54", "55"] },
  { estado: "RO", ddds: ["69"] },
  { estado: "RR", ddds: ["95"] },
  { estado: "SC", ddds: ["47", "48", "49"] },
  {
    estado: "SP",
    ddds: ["11", "12", "13", "14", "15", "16", "17", "18", "19"],
  },
  { estado: "SE", ddds: ["79"] },
  { estado: "TO", ddds: ["63"] },
];

export default brazilStates;

export async function createClickUpTask(data: any) {
  const listId = "https://api.clickup.com/api/v2/list/901302990307/task";
  const clickUpToken = process.env.NEXT_PUBLIC_CLICKUP_TOKEN;

  if (!clickUpToken) {
    toast.error("Token ClickUp não definido");
    return;
  }

  function findStateByDDD(phoneNumber: string) {
    const cleanedPhoneNumber = phoneNumber.startsWith("0")
      ? phoneNumber.substring(1)
      : phoneNumber;

    for (const state of brazilStates) {
      for (const ddd of state.ddds) {
        if (cleanedPhoneNumber.startsWith(ddd)) {
          return state.estado;
        }
      }
    }

    return "Estado não identificado";
  }

  const state = findStateByDDD(data.user_wpp);

  const task = {
    name: `${data.name ? data.name : "Captura Icone WhatsApp"} - LEAD SMVZAP`,
    description: data.email
      ? `Email: ${data.email}\nWhatsApp: ${data.user_wpp}\nEmpresa: ${data.company}`
      : data,
    custom_fields: [
      {
        id: "3a0fc569-c475-428f-83bc-3ffc51d318a4", // ID do campo personalizado "E-mail"
        value: data.email ? data.email : "", // Valor do e-mail como string simples
      },
      {
        id: "73c73040-0e73-423a-96a4-7d1d8d3ef56a", // ID do campo personalizado "WhatsApp"
        value: data.user_wpp.replace(/^0/, ""), // Valor do WhatsApp como string simples
      },
      {
        id: "57b61dad-a9c7-4a6c-98eb-522aaf06d5af", // ID do campo personalizado "Estado"
        value: state, // Valor do Estado como string simples
      },
    ],
  };

  const response = await fetch(listId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${clickUpToken}`,
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    const errorResponse = await response.text();
    console.error("Erro ao criar tarefa no ClickUp:", errorResponse);
    throw new Error("Falha ao criar tarefa no ClickUp");
  }

  return response.json();
}
