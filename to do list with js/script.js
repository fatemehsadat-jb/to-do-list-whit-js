var ebtn = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

ebtn.addEventListener("click", addafterclick);
input.addEventListener("keypress", addafterkeypress);

function inputlength() {
    return input.value.length;
}

function addafterclick() {
    if (inputlength() > 0) {
        createlist();
    }
}

function addafterkeypress(event) {
    if (inputlength() > 0 && event.which === 13) {
        createlist();
    }
}

function createlist() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    li.addEventListener("click", crossout);

    function crossout() {
        li.classList.toggle("done");
    }

    var cbtn = document.createElement("button");
    cbtn.appendChild(document.createTextNode("x"));
    li.appendChild(cbtn);

    cbtn.addEventListener("click", deletelist);

    function deletelist() {
        li.classList.add("delete");
    }
}