// console.log("hello");
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let btn3 = document.querySelector('.btn-3');
let check = document.querySelector('.check');
let userIn = document.querySelector('.userInput');
let compIn = document.querySelector('.compInput');



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
 compIn.textContent = arr[random];
 userIn.textContent = userInput;
check.style.backgroundColor = "Yellow";
check.style.padding = "15px";
check.style.fontSize = "18px";

if(userInput === compValue){
   
    check.textContent = "OOPS! Match Draw🥲";

}else if(userInput === "stone" && compValue === arr[1]){
   
     check.textContent = "You Lose! Computer Wins😒";
    


}else if(userInput === "stone" && compValue === arr[2]){
   
     check.textContent = "Wow! You Win🎯";

    }else if(userInput === "paper" && compValue === arr[0]){
       
         check.textContent = "Wow! You Win🎯";
    }else if(userInput === "paper" && compValue === arr[2]){
       
         check.textContent = "You Lose! Computer Wins😒";
    }else if(userInput === "scissor" && compValue === arr[0]){
      
         check.textContent = "You Lose! Computer Wins😒";
    }else if(userInput === "scissor" && compValue === arr[1]){
       
         check.textContent = "Wow! You Win🎯";
    }

}















// working on this code 


// let btn1 = document.querySelector('.btn-1');
// let btn2 = document.querySelector('.btn-2');
// let btn3 = document.querySelector('.btn-3');
// let check = document.querySelector('.check');
// let userIn = document.querySelector('.userInput');
// let compIn = document.querySelector('.compInput');
// let userScore = document.querySelector('.userScore');
// let compScore = document.querySelector('.compScore');

// let count = 0;

// function stone(){
//  return play("stone");
// }

// function paper(){
//  return play("paper");
// }

// function scissor(){
//  return play("scissor");
// }

// btn1.addEventListener("click",stone);
// btn2.addEventListener("click",paper);

// btn3.addEventListener("click",scissor);


// function play(userInput){
//    let arr = ["stone","paper","scissor"];
//    let random = Math.floor(Math.random() * 3);
//    console.log(random);
//   let compValue =  arr[random];
//   console.log(arr[random]);
//  compIn.textContent = arr[random];
//  userIn.textContent = userInput;
// check.style.backgroundColor = "Yellow";
// check.style.padding = "15px";
// check.style.fontSize = "18px";







// if(userInput === compValue){
   
//     check.textContent = "OOPS! Match Draw🥲";

// }else if(userInput === "stone" && compValue === arr[1]){
   
//      check.textContent = "You Lose! Computer Wins😒";
//      let newcount = count++;
//      compScore.textContent = newcount;
    


// }else if(userInput === "stone" && compValue === arr[2]){
   
//      check.textContent = "Wow! You Win🎯";
//        let newcount = count++;
//      userScore.textContent = newcount;

//     }else if(userInput === "paper" && compValue === arr[0]){
       
//          check.textContent = "Wow! You Win🎯";
//            let newcount = count++;
//      userScore.textContent = newcount;
//     }else if(userInput === "paper" && compValue === arr[2]){
       
//          check.textContent = "You Lose! Computer Wins😒";
//   let newcount = count++;
//      compScore.textContent = newcount;

//     }else if(userInput === "scissor" && compValue === arr[0]){
      
//          check.textContent = "You Lose! Computer Wins😒";
//            let newcount = count++;
//      compScore.textContent = newcount;
//     }else if(userInput === "scissor" && compValue === arr[1]){
       
//          check.textContent = "Wow! You Win🎯";
//            let newcount = count++;
//      userScore.textContent = newcount;
//     }

// }
