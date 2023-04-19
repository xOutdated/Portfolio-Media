const test = document.getElementById("peoplelist");

fetch("example.json")
  .then(response => response.json())
  .then(data => jsononscreen(data));

function jsononscreen(data) {
    console.log(data);
    data.forEach((element) => {  
        console.log(element)
        test.innerHTML += "<li>" + element.name + "</li>";
        test.innerHTML += "<img src='"+element.picture+"' alt='' />";
    });
}