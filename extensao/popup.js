import { cleanText } from "./utils/textCleaner.js";
import { summarize } from "./utils/summarizer.js";

document.getElementById("summarize").onclick = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const mode = document.getElementById("mode").value;

  chrome.tabs.sendMessage(tab.id, { action: "EXTRACT_TEXT" }, (res) => {
    const text = cleanText(res.text);
    const summary = summarize(text, Number(mode));
    document.getElementById("result").innerText = summary;
  });
};

chrome.storage.local.set({ lastSummary: summary });
