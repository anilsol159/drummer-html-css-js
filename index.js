function getKey(){
    var key = this.textContent;
    makeSound(key);
}

function makeSound(key){
    var activeBtn = document.querySelector("."+key);
    activeBtn.classList.add("pressed")

    var url;
    switch (key) {
        case "w":
            url = "sounds/tom-1.mp3"
            break;
        case "a":
            url = "sounds/tom-2.mp3"
            break;
        case "s":
            url = "sounds/tom-3.mp3"
            break;
        case "d":
            url = "sounds/tom-4.mp3"
            break;
        case "j":
            url = "sounds/snare.mp3"
            break;
        case "k":
            url = "sounds/kick-bass.mp3"
            break;
        case "l":
            url = "sounds/crash.mp3"
            break;

        default:
            break;
    }


    var audio = new Audio(url);
    audio.play();
    setTimeout(() => {
        activeBtn.classList.toggle("pressed")
    }, 100);
    
}

var drumItems = document.querySelectorAll(".drum");
document.addEventListener("keydown",function (event) {
    makeSound(event.key)
});
for(var i=0;i<drumItems.length;i++){
    drumItems[i].addEventListener("click",getKey);
}