const items = [
    'assets/img/01.jpg',
    'assets/img/02.jpg',
    'assets/img/03.jpg',
    'assets/img/04.jpg',
    'assets/img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

for(i=0; i<items.length;i++){
    document.querySelector(".sy_left_image").innerHTML +=(`
        <img id="img${i+1}" class="w-100 h-100 sy-d-off" src="assets/img/0${i+1}.jpg">
    `);
}
for(i=0; i<items.length;i++){
    document.querySelector(".sy_right_image").innerHTML +=(`
    <div id="imgthumb${i+1}" class="sy_thumb">
        <img class="sy_image_contain" src="assets/img/0${i+1}.jpg" alt="">
    </div>
    `);
}

document.getElementById("img1").classList.add("d-inline");
document.getElementById("imgthumb1").classList.add("sy-active-thumb");
let cont=1;
const prevPos= []; 

document.getElementById("prev").addEventListener("click",prevImage);
function prevImage(){
    prevPos.push(cont)
    cont--;
    if(cont<1){
        cont=5;
    }
        document.getElementById(`img${prevPos.at(-1)}`).classList.remove("d-inline") 
        document.getElementById(`imgthumb${prevPos.at(-1)}`).classList.remove("sy-active-thumb")  
        document.getElementById(`img${cont}`).classList.add("d-inline")
        document.getElementById(`imgthumb${cont}`).classList.add("sy-active-thumb")  
}
document.getElementById("next").addEventListener("click",nextImage);
function nextImage(){
    prevPos.push(cont)
    cont++;
    if(cont>5){
        cont=1;
    }
    document.getElementById(`img${prevPos.at(-1)}`).classList.remove("d-inline") 
    document.getElementById(`imgthumb${prevPos.at(-1)}`).classList.remove("sy-active-thumb")  
    document.getElementById(`img${cont}`).classList.add("d-inline")
    document.getElementById(`imgthumb${cont}`).classList.add("sy-active-thumb") 
}