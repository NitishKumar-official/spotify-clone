console.log("welcome to spotify");

let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('SongItem'));


let songs=[
    {songName: "perfect",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName: "Salame-e-ishq",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName: "naina",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName: "dilbar dilbar",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName: "mera dil bhi kitna",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName: "love",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName: "double take",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName: "barshat",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName: "mushkil",filePath:"9.mp3",coverPath:"9.jpg"},
    {songName: "nitu",filePath:"10.mp3",coverPath:"10.jpg"},
    
]


console.log("welcome to spotify1");
songItems.forEach((element, i) =>{
     console.log(element, i);
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

console.log("welcome to spotify");
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity= 0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
    
    Progress=  parseInt((audioElement.currentTime/audioElement.duration)* 100);
   
   myProgressBar.value=Progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value *audioElement.duration/100;
})

