
function imageFunc(pos){
    var randomNumber = Math.floor(Math.random() * 6 )+1;// 1-6

    var diceName=  "dice"+randomNumber+".png"// dice1.png -6
    
    var image = diceName; //full name
    
    var image1 = document.querySelectorAll("img")[pos];
    
    image1.setAttribute("src",image);

    return randomNumber;
}

num1 = imageFunc(0);
num2 = imageFunc(1);

if(num1>num2){
document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}
else if(num1<num2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS";

}
else
document.querySelector("h1").innerHTML = "DRAW";
