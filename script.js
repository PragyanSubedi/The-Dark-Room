
  const changeT = ["CTRL","SHIFT","j"]
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const audioTick = document.querySelector('.tick');
  const audioLaugh = document.querySelector('.laugh')
  const contextText=document.querySelector('h1');
  const pressed = [];
  const secretCode = 'ControlShiftj';
  let i = 0;
  let j =0;
  window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    audioLaugh.play();
    for (j = 0; j < 10; j++) { 
     cornify_add();
    }
    
  }
});

  function warning(){
    console.warn('%c HELP ME!!', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');
  }

  function changeText(){
    if(i === 3){
      i=0;
    }
    contextText.innerHTML = changeT[i];
    contextText.style.fontSize = "40px";
    i++;
    warning();
  };
  setInterval(changeText,1000);

  changeText();
  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();
  
  function timeSkip(){
      console.log("CTRL, SHIFT, j");
      audioTick.currentTime = 0.1;
  }
  setInterval(timeSkip,1000);
  timeSkip();