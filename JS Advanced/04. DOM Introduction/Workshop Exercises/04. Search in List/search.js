function search() {
   let items = Array.from(document.querySelectorAll('#towns li'));
   let search = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   // if (search) {
   //    let result = document.getElementById('result');
   //    let matches = items.filter(i => (i.textContent).toLowerCase().includes(search.toLowerCase()));
   //    matches.map(i => highlight(i));
   //    let nonMatches = items.filter(i => !(i.textContent).toLowerCase().includes(search.toLowerCase()));
   //    nonMatches.map(i => clearHighlight(i));
   //    result.textContent = `${matches.length} matches found`;
   // }


   if (search) {
      let count = 0;
      for (const item of items) {
         if ((item.textContent).toLowerCase().includes(search.toLowerCase())) {
            highlight(item);
            count++;
         } else {
            clearHighlight(item);
         }
      }
      result.textContent = `${count} matches found`;
   }

   function highlight(ref) {
      ref.style.textDecoration = 'underline';
      ref.style.fontWeight = 'bold';
   }

   function clearHighlight(ref) {
      ref.style.textDecoration = '';
      ref.style.fontWeight = '';
   }
}