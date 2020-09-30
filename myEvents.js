table_element = document.getElementsByClassName("table_element");

//table_element.addEventListener("mouseover", mouseOver);

function mouseOver(element) {
    var img = document.getElementById("enlarged_img");
    var location = element.children[3];
    img.src = location.children[location.children.length - 1].src
}

function mouseOut() {
    var img = document.getElementByClassName("tiny_img");
    img.style.visibility = "hidden";
}
