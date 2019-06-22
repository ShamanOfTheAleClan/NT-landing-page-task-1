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
		console.log(http);
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
    
    let images = document.querySelectorAll('.news-item');
    for (i=0; i < images.length; i++) {
        images[i]
    }
};