function extractArticleText() {
    const article = document.querySelector("article");
    if (article) return article.innexText;

    const paragraphs = [...document.querySelectorAll("p")];
    return paragraphs.map(p => p.innerHTML).join("\n")
}

chrome.runtime.onMessage.addListener((req, sender, sendeResponse) => {
    if (req.action === "EXTRACT_TEXT") {
        sendeResponse({ text: extractArticleText() });
    }
})