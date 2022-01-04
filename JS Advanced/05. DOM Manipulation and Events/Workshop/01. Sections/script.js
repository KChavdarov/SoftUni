function create(words) {
   let container = document.getElementById('content');
   for (const word of words) {
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');
      newP.style.display = 'none';
      newP.textContent = word;
      newDiv.appendChild(newP);
      container.appendChild(newDiv);
      newDiv.addEventListener('click', reveal);
   }

   function reveal(event){
      let p = event.target.querySelector('p');
      p.style.display = 'block';
   }
}