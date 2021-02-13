window.onload = choosePic;

let animalPix = new Array("images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img2.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * animalPix.length);
    console.log( document.getElementById("myPicture").src = animalPix[randomNum]);
}

function imageSelection(){
    
    let x= document.getElementById("img1");
    console.log(x);
}

function reset(){

}

function verify(){

}

