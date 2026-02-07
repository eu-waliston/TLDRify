import { cleanText } from "./utils/textCleaner.js";
import { summarize } from "./utils/summarizer.js";

document.getElementById("summarize").onclick = async () => {
    const [ tab ] = await chrome.tabs.query({ active: true, currentWindows: true});

    const mods = document.getElementById("mods").value

    chrome.tabs.sendMessage(tad.id, {action: "EXTRACT_TEXT"}, (res) => {
        const text = cleanText(res.text);
        const summary = summarize(text, Number(mode));
        document.getElementById("result").innerText = summary;
    })


    chrome.storage.local.set({ lastSummary: summary });
}