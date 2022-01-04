function solve() {
  let text = document.getElementById('text').value;
  let type = document.getElementById('naming-convention').value;

  document.getElementById('result').textContent = changeCase(text, type);

  function changeCase(text, type) {
    let cases = {
      'Pascal Case'(text) {
        let words = text.split(' ');
        words = words.map(w => {
          w = w.toLowerCase();
          w = w[0].toUpperCase() + w.substring(1);
          return w;
        });
        return words.join('');
      },
      'Camel Case'(text) {
        let words = text.split(' ');
        words = words.map(w => {
          w = w.toLowerCase();
          w = w[0].toUpperCase() + w.substring(1);
          return w;
        });
        words[0] = words[0].toLowerCase();
        return words.join('');
      }
    };

    if (cases[type] == undefined) {
      return 'Error!';
    } else {
      return cases[type](text);
    };
  };
}