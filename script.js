// burger animation

let burger = document.getElementById("burger");
let menu = document.querySelector(".menu-wrap");

function burgerClick()  {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        menu.classList.remove('translated');
        }
        else {
        burger.classList.add('active');
        menu.classList.add('translated');
        }
    }
burger.addEventListener('click', burgerClick) ;

// https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/

let rows = document.querySelectorAll('tr');


for (i=1; i < rows.length; i++) {
    if (rows[i].querySelector("td").innerHTML !== "-") {
        rows[i].classList.add("discount")
    }
}


//XLM



let url = 'https://api.unsplash.com/photos/?count=20&client_id=0e489bafc809bbb304de7230134f1a22096c706a20c0fa9537ddb7cb982c4543';

let data;
let imgUrlArray = [];
let http = new XMLHttpRequest();

window.onload=function() {

	http.onreadystatechange = function() {
		// console.log(http);
		if (http.readyState == 4 && http.status == 200) {
            data = JSON.parse(http.response);
            for (i=0; i < data.length; i++) {
                let imgUrl = data[i].urls.small;
                imgUrlArray.push(imgUrl);
            }
		}
	};
    
	http.open("GET", url);
    http.send();
    
};
let images = document.querySelectorAll('.news-item');

http.onload = function () {

    for (i=0; i < images.length; i++) {
        let cssUrl = imgUrlArray[i];
        images[i].style.backgroundImage = 'url("'+cssUrl+'")';
    }
}


//custom drop-downs

var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

//Table filter

let selectRoomItems = document.getElementById('room').querySelectorAll('.select-items');
for (i=0; i < selectRoomItems.length; i++) {
    selectRoomItems[i].addEventListener('click',filterByRoom);
    for (j=0; j < selectRoomItems[i].children.length; j++){
        selectRoomItems[i].children[j].addEventListener('click', filterByRoom);
        console.log('event added');
    }
}
function filterByRoom() {
    let  td, i, txtValue;
    let table = document.getElementById("flats");
    let tr = table.getElementsByTagName("tr");
    let filter = document.getElementById('room');
    let filterValue = filter.querySelector('.same-as-selected').textContent;
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() == filterValue.toUpperCase()) {
                // if (tr[i].classList.contains('orientation-hide') || tr[i].classList.contains('completion-hide')) {
                //     console.log('already hidden');
                // }
                // else {
                tr[i].classList.remove('room-hide');
                console.log('found something');
                // }
            }
            else {
            tr[i].classList.add('room-hide');
            console.log('removed something');
            }
            
        } 
    }
}

let selectOrientationItems = document.getElementById('orientation').querySelectorAll('.select-items');
for (i=0; i < selectOrientationItems.length; i++) {
    selectOrientationItems[i].addEventListener('click',filterByOrientation);
    for (j=0; j < selectOrientationItems[i].children.length; j++){
        selectOrientationItems[i].children[j].addEventListener('click', filterByOrientation);
        console.log('event added');
    }
}
function filterByOrientation() {
    let  td, i, txtValue;
    let table = document.getElementById("flats");
    let tr = table.getElementsByTagName("tr");
    let filter = document.getElementById('orientation');
    let filterValue = filter.querySelector('.same-as-selected').textContent;
  
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() == filterValue.toUpperCase()) {
                // if (tr[i].classList.contains('room-hide') || tr[i].classList.contains('completion-hide')) {
                //     console.log('already hidden');
                // }
                // else {
                tr[i].classList.remove('orientation-hide');
                console.log('found something');
                // }
            }
            else {
            tr[i].classList.add('orientation-hide');
            console.log('removed something');
            }
            
        }
    }
}

let selectCompletionItems = document.getElementById('completion').querySelectorAll('.select-items');
for (i=0; i < selectCompletionItems.length; i++) {
    selectCompletionItems[i].addEventListener('click',filterByCompletion);
    for (j=0; j < selectCompletionItems[i].children.length; j++){
        selectCompletionItems[i].children[j].addEventListener('click', filterByCompletion);
        console.log('event added');
    }
}
function filterByCompletion() {
    let  td, i, txtValue;
    let table = document.getElementById("flats");
    let tr = table.getElementsByTagName("tr");
    let filter = document.getElementById('completion');
    let filterValue = filter.querySelector('.same-as-selected').textContent;
  
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() == filterValue.toUpperCase()) {
                // if (tr[i].classList.contains('orientation-hide') || tr[i].classList.contains('room-hide')) {
                //     console.log('already hidden');
                // }
                // else {
                tr[i].classList.remove('completion-hide');
                console.log('found something');
                // }
            }
            else {
            tr[i].classList.add('completion-hide');
            console.log('removed something');
            }
            
        } 
    }
}


let selectAreaItems = document.getElementById('area').querySelector('.select-items');
// for (i=0; i < selectAreaItems.length; i++) {
    // selectAreaItems[i].addEventListener('click',filterByArea);
    // for (j=0; j < selectAreaItems[i].children.length; j++){
selectAreaItems.children[0].addEventListener('click', sortAscending);
console.log('event added');
selectAreaItems.children[1].addEventListener('click', sortDescending);
    // }
// }

function sortAscending() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("flats");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}

function sortDescending() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("flats");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
}
// function filterByArea() {
//         let tbody = document.querySelector("#flats tbody");
//         // get trs as array for ease of use
//         let rows = [].slice.call(tbody.querySelectorAll("tr"));
        
//         rows.sort(function(a,b) {
//           return a.cells[2].innerHTML - b.cells[2].innerHTML;
//         });
        
//         rows.forEach(function(v) {
//           tbody.appendChild(v); // note that .appendChild() *moves* elements
//         });
// }    
    // let  td, i, txtValue;
    // let table = document.getElementById("flats");
    // let tr = table.getElementsByTagName("tr");
    // let filter = document.getElementById('area');
    // let filterValue = filter.querySelector('.same-as-selected').textContent;
  
    // for (i = 0; i < tr.length; i++) {
    //     td = tr[i].getElementsByTagName("td")[2];
    //     if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.toUpperCase() == filterValue.toUpperCase()) {
    //         tr[i].style.display = "";
    //         console.log('found something');
    //         } else {
    //         tr[i].style.display = "none";
    //         console.log('removed something');
    //         }
    //     } 
    // }

