//selecting popup-box , overlay , button 

var popup_overlay = document.querySelector(".popup-overlay")
var popup_box = document.querySelector(".add-book-popup")
var plus_btn = document.getElementById("plusbtn")
var cancel_popup_btn = document.getElementById("cancel_popup")

plus_btn.addEventListener("click", function () {
    popup_overlay.style.display = "block"
    popup_box.style.display = "block"

})



//select container (box) , add book button , book title, book author , book description
var container = document.querySelector(".container")
var addbook = document.getElementById("addbook_btn")
var title_ip = document.getElementById("book-title-ip")
var author_ip = document.getElementById("book-author-ip")
var description_ip = document.getElementById("book-desc-ip")

title_ip.addEventListener('input', validateInput);
author_ip.addEventListener('input', validateInput);
description_ip.addEventListener('input', validateInput);

//function to prevent inputs ( from Not Sapce only entered as input)
function validateInput(e) {
  const inputValue = e.target.value;
  if (inputValue.trim() === '') {
    alert('Please enter a valid input !\nAvoid space as starting charecter !');
    e.target.value = ''; // clear the input field
  }
}

addbook.addEventListener("click", function (event) {
    event.preventDefault()

    if( (title_ip.value.length === 0 ) ||  (author_ip.value.length === 0) || (description_ip.value.length === 0)  ){

        alert("Please Enter all the required fields to add book")

    }

    else{

        var new_div = document.createElement("div")
        new_div.setAttribute("class", "book-container")
        //template leteral , we can give new input tag values and directly insert 
        new_div.innerHTML = `<h2 class="book-title"> ${title_ip.value} </h2>  
        <h3 class="author" > ${author_ip.value} </h3>
        <p> ${description_ip.value} </p>
        <button onclick="deletebook(event)">Delete</button>`
        container.append(new_div)
        popup_overlay.style.display = "none"
        popup_box.style.display = "none"
        title_ip.value = null;
        author_ip.value = null;
        description_ip.value = null;
    }

})

cancel_popup_btn.addEventListener("click", function (event) {
    event.preventDefault()
    popup_overlay.style.display = "none"
    popup_box.style.display = "none"
    title_ip.value = null;
    author_ip.value = null;
    description_ip.value = null;

})

function deletebook(event) {
    event.target.parentElement.remove()
}