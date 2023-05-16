function Add() {
    var a = document.getElementById("view");
    var InputText = document.getElementById("InputText");
    var li = document.createElement("li");
    li.setAttribute('id', inputText.value);
    li.innerText = inputText.value;
    a.appendChild(li);
    inputText.value="";
}

function Remove() {
    var a = document.getElementById("view");
    var inputText = document.getElementById("inputText");
    var item = document.getElementById(inputText.value);
    a.removeChild(item);
    inputText.value="";
}

//NOTES for myself to remember js better.. ------------------------------

//parent node = ul (whole)
//childnode = li (part)
//appendchild = adding to the (parent) list
//inputText.value = what's in the textbox, putting value "" empties the box
//