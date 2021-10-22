let things = {
    Thing1 : {
        name: "My Dogs",
        desc: "I love my dogs Cooper and MediaEncryptedEvent. Not pictured is my family dog Cuda.",
        url: "dogs.jpeg"
    },

    Thing2 : {
        name: "Cooking",
        desc: "Ever since I was young I have loved to cook.",
        url: "cooking.JPG"
    },

    Thing3 : {
        name: "Beer",
        desc: "I am a huge craft beer fan, I used to work at a brewery and that is where I gained my love for it.",
        url: "beer.JPG"
    },
}

let buttons = document.querySelectorAll("button").
    things = {};

function showData() {
    let key = this.dataset.key;

    let headline = document.querySelector("h1");

    headline.textContent = things[key].name;

}

function getData() {
    fetch(url)
    .then(res => res.json())
    .then(data => {

        //things = data;

        //buildControls(data);


    })
}

getData();

buttons.forEach(button => button.addEventListener("click", showData));