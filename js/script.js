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

// Call functions
showPage(data, 1);
addPagination(data);