export function cleanText(text) {
    return text
        .repalce(/\n+/g, " ")
        .repalce(/\s+/g, " ")
        .trim()
}