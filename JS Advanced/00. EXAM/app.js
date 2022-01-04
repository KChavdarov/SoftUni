function solve() {
   const [posts, form, archive] = document.querySelectorAll('.site-content section');
   const inputs = Array.from(form.querySelectorAll('input,textarea'));
   const archiveList = archive.querySelector('ol');
   const [creator, title, category, content] = inputs;

   form.querySelector('button').addEventListener('click', createPost);

   function createPost(event) {
      event.preventDefault();
      const newArticle = document.createElement('article');
      const articleHeading = createElement('h1', [], title.value);
      const articleCategory = createElement('p', [], 'Category:', createElement('strong', [], category.value));
      const articleCreator = createElement('p', [], 'Creator:', createElement('strong', [], creator.value));
      const articleContent = createElement('p', [], content.value);
      const buttonsDiv = createElement('div', ['class=buttons'],
         createElement('button', ['class=btn delete'], 'Delete'),
         createElement('button', ['class=btn archive'], 'Archive'),
      );
      newArticle.appendChild(articleHeading);
      newArticle.appendChild(articleCategory);
      newArticle.appendChild(articleCreator);
      newArticle.appendChild(articleContent);
      newArticle.appendChild(buttonsDiv);
      posts.appendChild(newArticle);

      buttonsDiv.addEventListener('click', buttonActions);

      function buttonActions(event) {
         if (event.target.tagName == 'BUTTON') {
            const button = event.target;
            if (Array.from(button.classList).includes('delete')) {
               newArticle.remove();
            }
            if (Array.from(button.classList).includes('archive')) {
               const newLi = createElement('li', [], articleHeading.textContent);
               archiveList.appendChild(newLi);
               const sorted = Array.from(archiveList.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
               sorted.forEach(a => archiveList.appendChild(a));
               newArticle.remove();
            }
         }
      }
   }

   function createElement(type, attributes = [], ...content) {
      const result = document.createElement(type);
      if (attributes.length > 0) {
         attributes.forEach(attr => {
            let [attribute, value] = attr.split('=');
            result.setAttribute(attribute, value);
         });
      } content.forEach(e => {
         if (typeof e == 'string') {
            let text = document.createTextNode(e);
            result.appendChild(text);
         } else {
            result.appendChild(e);
         }
      });
      return result;
   }
}
