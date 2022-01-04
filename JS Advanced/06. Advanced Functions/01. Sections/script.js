function create(words) {
   let container = document.getElementById('content');
   
   for (const word of words) {
      let newP = createElement('p', word);
      let newDiv = createElement('div', newP);
      newP.style.display = 'none';
      container.appendChild(newDiv);
      newDiv.addEventListener('click', reveal);

      function reveal() {
         newP.style.display == 'none' ? newP.style.display = 'block' : newP.style.display = 'none';
      }
   }

   function createElement(type, content) {
      const result = document.createElement(type);

      if (typeof content == 'string') {
         result.textContent = content;
      } else {
         result.appendChild(content);
      }
      return result;
   }
}