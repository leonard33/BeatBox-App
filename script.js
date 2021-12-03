const beats={
 "a":"./assets/Piano Chord 331.mp3",
 "s":"./assets/Piano Chord 209.mp3",
 "d":"./assets/Piano Chord 208.mp3",
 "f":"./assets/Drum Sticks Hit 3.mp3",
 "g":"./assets/Drum Snare Roll.mp3",
 "h":"./assets/PREL Musical 57.mp3",
 "j":"./assets/Cymbol Suspended 2.mp3",
 "k":"./assets/Musical Compos 33.mp3",
 "l":"./assets/Musical Orches 4.mp3"
}

const playbeat= (buttonkey)=>{
    let audioSrc = beats[buttonkey];
    let audio = new Audio(audioSrc);
    audio.currentTime = 0;
    audio.play();
    
}
// TEST CODE
/*const playbeat = (buttonkey)=>{
    if (buttonkey == "a"){
        let audio = new Audio("./assets/Piano Chord 331.mp3");
        audio.currentTime = 0;
        audio.play();
    }
}*/

document.addEventListener('keydown',(event)=>{
    playbeat(event.key);
    console.log(event.key);
})


