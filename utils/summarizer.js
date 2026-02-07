export function summarize(text, maxSentences = 5) {
  const sentences = text.match(/[^.!?]+[.!?]/g);
  if (!sentences) return "";

  const freq = {};
  text.toLowerCase().split(/\W+/).forEach(word => {
    if (word.length > 3)
      freq[word] = (freq[word] || 0) + 1;
  });

  const scored = sentences.map(s => ({
    sentence: s,
    score: s
      .toLowerCase()
      .split(/\W+/)
      .reduce((acc, w) => acc + (freq[w] || 0), 0)
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, maxSentences)
    .map(s => s.sentence)
    .join(" ");
}
