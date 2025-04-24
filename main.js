let soundOn = document.getElementById("soundOn");
let soundOff = document.getElementById("soundOff");
let stein = document.getElementById("stein");
let buttonStart = document.getElementById("buttonStart");
let blackscreen = document.getElementById("blackscreen");
let intro = document.getElementById("intro");
let instruction = document.getElementById("instruction");
let notification = document.getElementById("notification");
let inputName = document.getElementById("inputName");
let buttonJoin = document.getElementById("buttonJoin");
let divContainer = document.getElementById("div"); // Get the div container
let inputCode = document.getElementById ("inputCode")
let buttonCode = document.getElementById ("buttonCode")
let objective1 = document.getElementById("objective1")
let objective2 = document.getElementById ("objective2")
let objective3 = document.getElementById("objective3")
let introduction = document.getElementById ("introduction")
let yourCode = document.getElementById ("yourCode")
let code0 = document.getElementById ("code0")
let signIn = document.getElementById ("signIn")
let stage1 = document.getElementById("stage1")
let linkArcher = document.getElementById ("linkArcher")
let developed = document.getElementById ("developed")


setTimeout(() => {
  notification.classList.add("hide");
  setTimeout(()=>{
    developed.classList.add("hide")
  },4500);
}, 4500);

soundOff.addEventListener("click", function () {
  soundOff.style.display = "none";
  soundOn.style.display = "block";
  stein.play();
});

buttonStart.addEventListener("click", function () {
  blackscreen.classList.add("show");
  setTimeout(() => {
    blackscreen.classList.add("hide");
    intro.style.display = "none";
  }, 4000);
});

buttonJoin.addEventListener("click", function () {
  let playerName = inputName.value; // Get player name
  instruction.textContent = "Welcome, " + playerName; // Update instruction text
  buttonJoin.style.display="none"

setTimeout( ()=> {
  let sentences = ["your goal is find the code", "you need to input it here:"];
  
  let i = 0;

  function text() {
    if (i < sentences.length) {
      let appearMyText = document.createElement("div");
      appearMyText.textContent = sentences[i];
      divContainer.appendChild(appearMyText); // Append to the div container
      i++;
      setTimeout(text, 2000);
      
      
      setTimeout(()=>{
          introduction.style.display="block"
        },3000);
      
      setTimeout(()=>{
        objective1.style.display="block";
        setTimeout(()=>{
        objective1.style.display="none"
        setTimeout(()=>{
        objective2.style.display="block";
        setTimeout(()=>{
        objective2.style.display="none"
        setTimeout(()=>{
        objective3.style.display="block";
        setTimeout(()=>{
        objective3.style.display="none"
        yourCode.style.display="block"
        code0.style.display="inline"
        signIn.style.display="none"
        
        setTimeout(()=>{
        stage1.classList.add("show")
        linkArcher.classList.add("show")
        
        linkArcher.addEventListener("click", function(){
        window.location.href = "archer/index1.html";

  //game code should be game_code to prevent issue because of space, use underscore
        });
        
        },2000);
        
      },2500);
      },2000);
      },2500);
      },2000);
      },8500);
      },6500);
      
      
      
      
      
      
    }
  }
  text();
},2000);
});



const buttons = document.querySelectorAll('button');
  const audio = document.getElementById('audioPlayer');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      audio.play();
    });
  });
  
  
  window.onload = function(){
    alert("alert")
    alert("I reccomend to play this website if you have internet connection")
    alert("be cautious")
    alert("El Psy Congroo...")
  }