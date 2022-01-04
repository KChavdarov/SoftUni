function solve() {
  let textarea = document.getElementById('input');
  let output = document.getElementById('output');
  let text = textarea.value;
  let sentences = breakDownText(text);
  let paragraphs = prepareParagraphs(sentences);
  output.innerHTML = paragraphs;

  function breakDownText(text) {
    let sentences = text.split(/\. */);
    sentences = sentences.filter(a => a.length >= 1).map(s => s + '. ');
    return sentences;
  }

  function prepareParagraphs(sentences) {
    let result = [];
    for (let i = 0; i < Math.ceil(sentences.length / 3); i++) {
      result.push([]);
    }
    sentences.forEach((sentence, index) => {
      result[Math.trunc(index / 3)].push(sentence);
    });
    result = result.map(p => p.join(''));
    result = result.map(a => `<p>${a}</p>`);
    return result.join('\n');
  }
}