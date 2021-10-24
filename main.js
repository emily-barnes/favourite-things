(() => {

    console.log('Begin');
})

let buttons = document.querySelectorAll("button");
    things = {};

function showData() {
    let key = this.dataset.key;

    let name= document.querySelector("name");
    let desc= document.querySelector("desc");
    let image= document.querySelector("image");

    headline.textContent = things[key].name;
    headline.textContent = things[key].desc;
    headline.textContent = things[key].image;

}
function getData() {
   fetch(data.json)
   .then(res => res.json())
   .then(data => {

    console.log(data);

        things = data;

        //buildControls(data);


  })
}

getData();

buttons.forEach(button => button.addEventListener("click", showData));