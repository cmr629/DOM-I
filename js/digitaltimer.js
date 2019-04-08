class Timer{
    constructor(){
      this.interval = null;
      this.timer = 0;    
 
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
    
    updateDigits(value){
        let str = value.split(".");
        let sTens = str[0].length > 1 ? str[0].substring(0, 1) : "0";
        let sOnes = str[0].length > 1 ? str[0].substring(1, 2) : str[0];
        let test = str[0].length;
        
        document.getElementById("secondTens").textContent = sTens;
        document.getElementById("secondOnes").textContent = sOnes;
        document.getElementById("msHundreds").textContent = str[1].substring(0,1);
        document.getElementById("msTens").textContent = str[1].substring(1,2);
    }

    onTimerClick(){
        this.timer = 0;
        let timerEvent = this;
        this.startButton.disabled = true;
        
        this.interval  = setInterval(function(){
          timerEvent.timer += 10;
          timerEvent.updateDigits((timerEvent.timer / 1000).toFixed(2));
          if (timerEvent.timer >= 10000){
            timerEvent.startButton.disabled = false;
            document.querySelector(".digits").style.color = "red";
            clearInterval(timerEvent.interval);
          }
        }, 10);
    }

    onReset(){
        this.timer = 0;
        document.getElementById("secondTens").textContent = "-";
        document.getElementById("secondOnes").textContent = "-";
        document.getElementById("msHundreds").textContent = "-";
        document.getElementById("msTens").textContent = "-";

        this.startButton.disabled = false;
        document.querySelector(".digits").style.color = "black";
        clearInterval(this.interval);
    }
  }

  let timer = new Timer();
  timer.addResetButton(document.querySelector(".reset"));
  timer.addStartButton(document.querySelector(".start"));