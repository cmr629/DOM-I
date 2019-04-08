class Timer{
    constructor(){
      this.interval = null;
      this.timer = 0;    
      document.querySelector(".timer h1").textContent = "0.00";
      this.startButton = null;
      this.resetButton = null;
    }

    addStartButton(button){
        this.startButton = button;
        this.startButton.addEventListener("click", () => {this.onTimerClick()});
    }

    addResetButton(button){
        this.resetButton = button;
        this.resetButton .addEventListener("click", () => {this.onReset()});
    }
  
    onTimerClick(){

        this.timer = 0;
        let timerEvent = this;
        this.startButton.disabled = true;
        
        this.interval  = setInterval(function(){
          timerEvent.timer += 10;
          document.querySelector(".timer h1").textContent = (timerEvent.timer / 1000).toFixed(2);
          if (timerEvent.timer >= 10000){
            timerEvent.startButton.disabled = false;
            document.querySelector(".timer h1").style.color = "red";
            clearInterval(timerEvent.interval);
          }
        }, 10);
   
    }

    onReset(){
        this.timer = 0;
        document.querySelector(".timer h1").textContent = this.timer.toFixed(2);
        this.startButton.disabled = false;
        document.querySelector(".timer h1").style.color = "black";
        clearInterval(this.interval);
    }
  }

  let timer = new Timer();
  timer.addResetButton(document.querySelector(".reset"));
  timer.addStartButton(document.querySelector(".start"));