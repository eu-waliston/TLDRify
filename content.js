function extractArticleText() {
  const article = document.querySelector("article");
  if (article) return article.innerText;

  const paragraphs = [...document.querySelectorAll("p")];
  return paragraphs.map(p => p.innerText).join("\n");
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "EXTRACT_TEXT") {
    sendResponse({ text: extractArticleText() });
  }
});
