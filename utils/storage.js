import jsPDF from "jspdf";

export async function saveSummary() {
    const { summaries = []} = await chrome.storage.local.get("summaries")

    summaries.push(data)

    await chrome.storage.local.set({ summaries })
}

export async function getSummarisbySite(URL) {
    const { summaries = [] } =  await chrome.storage.local.get("summaries")

    return summaries.filter(s => s.url === url)
}

export async function toggleFavorte(index) {
    const { summaries  = [] } = await chrome.storage.local.get("summaries");

    await chrome.storage.local.set({ summaries })
}

// 📤 EXPORTAR EM TEXTO OU PDF
export function exportTXT(summary) {
    const blob = new Blob([summary], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    chrome.downloads.download({ url, filename: "resumo.txt" })
}

// 📄 PDF (via jsPDF)
export function exportPDF(summary) {
    const pdf = new jsPDF();
    pdf.text(summary, 10, 10);
    pdf.save("resumo.pdf")
}

