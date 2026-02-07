export async function callAI(text, mode) {
    const promptMap = {
        bullets: "Resuma o texto em bullet points claros:",
        questions: "Crie perguntas de estudo com base no texto:",
        academic: "Faça um resumo acadêmico formal:",
        casual: "Resuma de forma simples e descontraída:",
    }

    const response = await fetch("SUA_API_AQUI", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer SUA_CHAVE"
        },
        body: JSON.stringify({
            prompt: `${promptMap[mode]}\n\n${text}`
        })
    })

    const data = await response.json()
    return data.result;
}