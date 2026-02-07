import { callAI } from "./utils/aiClient.js";


chrome.runtime.onMessage.addListener((request, sender, sendResponses) => {
    if (request.type === 'SUMMARIZE_TEXT') {
        const { text, level } = request;

        const summary = summarizeLocally(text, level);

        chrome.storage.local.set({ lastSummary: summary });

        sendResponses({ summary })

    }

    return true; //mantém o canal aberto
})

chrome.runtime.onMessage.addListener(async (req, sender, sendResponse) => {
  if (req.type === "AI_SUMMARY") {
    const result = await callAI(req.text, req.mode);
    sendResponse({ summary: result });
  }
  return true;
});

function summarizeLocally(text, level) {
    const sentences = text.match(/[^.!?]+[.!?]/g) || [];
    return sentences.slice(0, level).join(" ");
}