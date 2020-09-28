/* ============================================= */
/*                   Script                      */
/* ============================================= */

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = "";
   let htmlList = '';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {

         htmlList += `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">ethel.dean@example.com</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined 12-15-2005</span>
               </div>
            </li>
            `
      }
   }
   studentList.insertAdjacentHTML('beforeend', htmlList);
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';
   for (let i = 0; i < numOfPages; i++) {
      linkList.innerHTML += `<li>
      <button type="button">${i + 1}</button>
    </li>`
   }
   document.querySelector('BUTTON').className = 'active';
   linkList.addEventListener('click', (e) => {
      if (e.target = "BUTTON") {
         document.querySelector('.active').className = '';
         e.target.className = 'active';
         showPage(data, e.target.textContent);
      }
   });
}

//Adds Searchbar and creates a new array based on search value
//checks to see if search matches array items and displays a message if nothing matches
//calls showPage() and addPagination() with the new array
function searchbar(list) {
   const header = document.querySelector('.header');
   let htmlSearch = `
   <label for="search" class="student-search">
   <input id="search" placeholder="Search by name...">
   <button class="search-button" type="button"><img class="search-button" src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `
   header.insertAdjacentHTML('beforeend', htmlSearch);

   document.querySelector('LABEL').addEventListener('click', (e) => {
      const studentList = document.querySelector('ul.student-list');
      const page = document.querySelector('.page');
      if (e.target.className === 'search-button') {
         let search = document.querySelector('#search').value.toLowerCase();
         let searchArray = [];
         if (search === '') {
           page.insertAdjacentHTML('beforeend', `<h3 class="no-results">No results found</h3>`);
         } else {
            const noResults = document.querySelectorAll('.no-results');
            noResults.forEach(element => element.remove());
            for (let i = 0; i < list.length; i++) {
               if (list[i].name.first.toLowerCase().includes(search) || list[i].name.last.toLowerCase().includes(search)) {
                  searchArray.push(list[i])
               }
            }
            if (searchArray.length === 0) {
               page.insertAdjacentHTML('beforeend', `<h3 class="no-results">No results found</h3>`);
            }
         }
         showPage(searchArray, 1);
         addPagination(searchArray);
      }
   });
   document.querySelector('#search').addEventListener('keyup', (e) => {
      const studentList = document.querySelector('ul.student-list');
      const page = document.querySelector('.page');
         let search = document.querySelector('#search').value.toLowerCase();
         let searchArray = [];
            const noResults = document.querySelectorAll('.no-results');
            noResults.forEach(element => element.remove());
            for (let i = 0; i < list.length; i++) {
               if (list[i].name.first.toLowerCase().includes(search) || list[i].name.last.toLowerCase().includes(search)) {
                  searchArray.push(list[i])
               }
            }
            if (searchArray.length === 0) {
               page.insertAdjacentHTML('beforeend', `<h3 class="no-results">No results found</h3>`);
            }
         showPage(searchArray, 1);
         addPagination(searchArray);
   });
}

// Call functions
showPage(data, 1);
addPagination(data);
searchbar(data);