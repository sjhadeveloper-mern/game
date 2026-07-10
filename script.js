// console.log("hello");
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');
let check = document.querySelector('.check');



function stone(){
 return play("stone");
}

function paper(){
 return play("paper");
}

function scissor(){
 return play("scissor");
}

btn1.addEventListener("click",stone);
btn2.addEventListener("click",paper);

btn3.addEventListener("click",scissor);


function play(userInput){
   let arr = ["stone","paper","scissor"];
   let random = Math.floor(Math.random() * 3);
   console.log(random);
  let compValue =  arr[random];
  console.log(arr[random]);


if(userInput === compValue){
    alert("draw");
    check.textContent = "draw";

}else if(userInput === "stone" && compValue === arr[1]){
   
     check.textContent = "computer winner";
    


}else if(userInput === "stone" && compValue === arr[2]){
   
     check.textContent = "suraj winner";

    }else if(userInput === "paper" && compValue === arr[0]){
       
         check.textContent = "suraj winner";
    }else if(userInput === "paper" && compValue === arr[2]){
       
         check.textContent = "computer winner";
    }else if(userInput === "scissor" && compValue === arr[0]){
      
         check.textContent = "computer winner";
    }else if(userInput === "scissor" && compValue === arr[1]){
       
         check.textContent = "suraj winner";
    }

}