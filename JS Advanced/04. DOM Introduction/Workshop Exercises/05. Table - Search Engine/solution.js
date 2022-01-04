function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById('searchField');

      if (search.value) {
         //    resetSearch();
         //    getResults();
         // }

         // function getResults() {
         //    let fields = Array.from(document.querySelectorAll('tbody td'));
         //    let matches = fields.filter(a => a.textContent.includes(search.value));
         //    matches.map(a => highlightRow(a));
         //    search.value = '';
         // }

         // function highlightRow(ref) {
         //    ref.parentElement.classList.add('select');
         // }

         // function resetSearch() {
         //    let rows = Array.from(document.querySelectorAll('tbody tr'));
         //    rows.map(a => a.classList.remove('select'));

         let rows = Array.from(document.querySelectorAll('tbody tr'));

         for (const row of rows) {
            if (row.textContent.toLowerCase().includes(search.value.toLowerCase())) {
               row.classList.add('select');
            }else{
               row.classList.remove('select');
            }
         }
      }
   }
}