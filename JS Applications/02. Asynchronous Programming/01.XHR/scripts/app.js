function loadRepos() {
   const result = document.getElementById('res');
   let url = 'https://api.github.com/users/testnakov/repos';

   const httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', (event) => {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
         result.textContent = httpRequest.responseText;
      }
   });
   httpRequest.open('GET', url);
   httpRequest.send();
}