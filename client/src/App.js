import React, { Component } from 'react';
import './App.css';
import './Timer.css';
import Timer from './Timer';
import Sound from 'react-sound';
import soundfile from './assets/old-fashioned-door-bell-daniel_simon.mp3';




class App extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = { 
      seconds: '0',
      minutes: '25',
      session1: 'incomplete',
      session2: 'incomplete',
      session3: 'incomplete',
      session4: 'incomplete',
      session5: 'incomplete',
      session6: 'incomplete',
      session7: 'incomplete',
      session8: 'incomplete',
      currMax: '1500',
      helpertext1: 'invisible',
      helpertext2: 'invisible',
      currSession: '0',
      sessionType: 'focus',
      accent: '#DD6565',
      alarm: 'STOPPED',
    }

    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.restart = this.restart.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.setSession1 = this.setSession1.bind(this);
    this.setSession2 = this.setSession2.bind(this);
    this.setSession3 = this.setSession3.bind(this);
    this.setSession4 = this.setSession4.bind(this);
    this.setSession5 = this.setSession5.bind(this);
    this.setSession6 = this.setSession6.bind(this);
    this.setSession7 = this.setSession7.bind(this);
    this.setSession8 = this.setSession8.bind(this);
    this.playSound = this.playSound.bind(this);
    this.paused = true;

  }

  
  handleChange = (event) =>{
    this.setState({
     minutes: event.target.value
    })
  }
  
  
  setSession1 () {
    this.secondsRemaining = 1500;
        this.setState({
          seconds: '0',
          minutes: '25',
          currMax: 1500,
          currSession: 1,
          sessionType: 'focus',
          accent: '#DD6565',    
          session1: 'active',
          session2: 'incomplete',
          session3: 'incomplete',
          session4: 'incomplete',
          session5: 'incomplete',
          session6: 'incomplete',
          session7: 'incomplete',
          session8: 'incomplete',
        });
  }

  setSession2 () {
    this.secondsRemaining = 300;
    this.setState({
      seconds: '0',
      minutes: '5',
      currMax: 300, 
      currSession: 2,
      sessionType: 'shortbreak',
      accent: '#6597DD',
      session1: 'complete',
      session2: 'active',
      session3: 'incomplete',
      session4: 'incomplete',
      session5: 'incomplete',
      session6: 'incomplete',
      session7: 'incomplete',
      session8: 'incomplete',
    });
}

setSession3 () {
  this.secondsRemaining = 1500;
  this.setState({
    seconds: '0',
    minutes: '25',
    currMax: 1500, 
    currSession: 3,
    sessionType: 'focus',
    accent: '#DD6565',   
    session1: 'complete',
    session2: 'complete',
    session3: 'active',
    session4: 'incomplete',
    session5: 'incomplete',
    session6: 'incomplete',
    session7: 'incomplete',
    session8: 'incomplete',
  });
}

setSession4 () {
  this.secondsRemaining = 300;

  this.setState({
    seconds: '0',
    minutes: '5',
    currMax: 300, 
    currSession: 4,
    sessionType: 'shortbreak',
    accent: '#6597DD',
    session1: 'complete',
    session2: 'complete',
    session3: 'complete',
    session4: 'active',
    session5: 'incomplete',
    session6: 'incomplete',
    session7: 'incomplete',
    session8: 'incomplete',
  });
}

setSession5 () {
  this.secondsRemaining = 1500;

  this.setState({
    seconds: '0',
    minutes: '25',
    currMax: 1500, 
    currSession: 5,
    sessionType: 'focus',
    accent: '#DD6565',   
    session1: 'complete',
    session2: 'complete',
    session3: 'complete',
    session4: 'complete',
    session5: 'active',
    session6: 'incomplete',
    session7: 'incomplete',
    session8: 'incomplete',
  });
}

setSession6 () {
  this.secondsRemaining = 300;

  this.setState({
    seconds: '0',
    minutes: '5',
    currMax: 300, 
    currSession: 6,
    sessionType: 'shortbreak',
    accent: '#6597DD',
    session1: 'complete',
    session2: 'complete',
    session3: 'complete',
    session4: 'complete',
    session5: 'complete',
    session6: 'active',
    session7: 'incomplete',
    session8: 'incomplete',
  });
}

setSession7 () {
  this.secondsRemaining = 1500;

  this.setState({
    seconds: '0',
    minutes: '25',
    currMax: 1500, 
    currSession: 7,
    sessionType: 'focus',
    accent: '#DD6565',   
    session1: 'complete',
    session2: 'complete',
    session3: 'complete',
    session4: 'complete',
    session5: 'complete',
    session6: 'complete',
    session7: 'active',
    session8: 'incomplete',
  });
}

setSession8 () {
  this.secondsRemaining = 1500;

  this.setState({
    seconds: '0',
    minutes: '25',
    currMax: 1500, 
    currSession: 8,
    sessionType: 'shortbreak',
    accent: '#6597DD',   
    session1: 'complete',
    session2: 'complete',
    session3: 'complete',
    session4: 'complete',
    session5: 'complete',
    session6: 'complete',
    session7: 'complete',
    session8: 'active',
  });
}

async playSound() {
  this.setState({
    alarm: 'PLAYING',
  });

  await new Promise(resolve => setTimeout(resolve, 2000)); // 3 sec

  this.setState({
    alarm: 'STOPPED',
  });
}


   async tick () {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
    var percentage = this.secondsRemaining / this.state.currMax;

    this.setState({
      minutes: min,
      seconds: sec,
    })

    if (min === 0 & sec === 0) {
      //clearInterval(this.intervalHandle);

      this.playSound();

      switch(this.state.currSession) {
        case 1:
          this.setSession2();
          break;
        case 2:
          this.setSession3();
          break;
        case 3:
          this.setSession4();
          break;
        case 4:
          this.setSession5();
          break;
        case 5:
          this.setSession6();
          break;
        case 6:
          this.setSession7();
          break;
        case 7:
          this.setSession8();
          break;
      }
      }

      this.secondsRemaining--; 

  }

  toggle1 () {

    if(this.state.helpertext1 == 'visible') {
      this.setState({
        helpertext1: 'invisible',
    })
  }
  else {
    this.setState({
      helpertext1: 'visible'
    })
  }
    }



  toggle2 () {

    if(this.state.helpertext2 == 'visible') {
      this.setState({
        helpertext2: 'invisible',
    })
  }
  else {
    this.setState({
      helpertext2: 'visible'
    })
  }
  }

  startCountDown () {

    if(this.state.currSession == 0) {
      this.setSession1();
    }
    console.log('start countdown');
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = this.secondsRemaining ? this.secondsRemaining: time * 60;
    this.paused = false;
    }   

  stopTimer () {
    console.log('stop countdown');
    this.paused = true;
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60) + 1;
    
    this.setState({
      minutes: min,
      seconds: sec
    })

    clearInterval(this.intervalHandle);
    }    

    restart () {
      console.log('stop countdown');
      this.paused = true;
      this.secondsRemaining = this.state.currMax;
      
      this.setState({
        minutes: this.state.currMax/60,
        seconds: '0'
      })
      clearInterval(this.intervalHandle);
      }    
  
  // Fetch  after first mount
  componentDidMount() {
  }

  /*
  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }
  */


  render() {

    return (
      <div className={"App " + this.state.sessionType}>

      <Sound
      url={soundfile}
      playStatus={this.state.alarm}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
      />

        <h1>pomo.doro</h1>
        <div className="bgbox-1"></div>
        <div className="bgbox-2"></div>
        <div className="bgbox-3"></div>

        <div className="subtitle">let's get down to business.</div>
        <div className="links">
          <div class="linkdiv">
          <span onClick={this.toggle1}>what is pomodoro?</span>
          <div class={this.state.helpertext1 + " helpertext"}>the <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">pomodoro technique</a> is a time management method developed by francisco cirillo. <br></br><br></br>focus hard for 25 minute, then take a short 5 minute break. after 4 focus sessions and breaks, take a long break of 25 minutes. <br></br> <br></br></div>
          </div>
          <span onClick={this.toggle2}>how do i use this app?</span>
          <div class={this.state.helpertext2 + " helpertext"}>use the buttons to pause/play or restart the timer. click through the circles on the right to skip between sessions, or let it run. </div>

        </div>

        <div className="sessionProgress">
          <div onClick={this.setSession8} className={this.state.session8 + " sessionProgressCircle"}></div>
          <div onClick={this.setSession7} className={this.state.session7 + " sessionProgressCircle"}></div>
          <div onClick={this.setSession6} className={this.state.session6 + " sessionProgressCircle"}></div>
          <div onClick={this.setSession5} className={this.state.session5 + " sessionProgressCircle"}></div>
          <div onClick={this.setSession4} className={this.state.session4 + " sessionProgressCircle"}></div>
          <div onClick={this.setSession3} className={this.state.session3 + " sessionProgressCircle"}></div>
          <div onClick={this.setSession2} className={this.state.session2 + " sessionProgressCircle"}></div>
          <div onClick={this.setSession1} className={this.state.session1 + " sessionProgressCircle"}></div>
        </div>

        <div className="credit">created by <a href="http://jessieshen.me">jessie shen</a>. now on <a href="https://github.com/shenjessiej/pomo-doro">github</a>.</div>

        <svg className="progressbar" height="206" width="206">
          <circle cx="103" cy="103" r="100" stroke="#EFEFEF" stroke-width="3" fill="white" />
          <circle cx="103" cy="103" r="80" stroke={this.state.accent} stroke-width="20" fill="white" stroke-linecap="round"
            stroke-dasharray={(1-((this.state.minutes * 60 + this.state.seconds)/this.state.currMax)) * 502.654825 + " 502.654825"} stroke-dashoffset="0"/>
        </svg>

        <button
              className="button-restart"
              onClick={this.restart}>
              <i className="fa fa-repeat"></i>
            </button>

        {this.paused ? (
          <div>

            <div className="timersubtitle">TIME PAUSED</div>
            <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>

            <button
              className="button-play"
              onClick={this.startCountDown}>
              <i className="fa fa-play"></i>
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>

            <div className="timersubtitle">TIME LEFT</div>
            <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>

            <button
              className="button-play"
              onClick={this.stopTimer}>
              <i className="fa fa-pause"></i>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
