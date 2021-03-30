import Logo from './logo.svg';
import './App.css';
import {Controller, Scene} from 'react-scrollmagic';
import { Fragment, useState } from 'react';
import { ParallaxProvider} from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import BoyS1 from './assets/BoyScene1.png';
import BoyS2P1 from './assets/BoyScene2_P1.png';
import BoyS2P2 from './assets/BoyScene2_P2F.png';
import BoyS3P1 from './assets/BoyScene3_P1.png';
import BoyS3P2 from './assets/BoyScene3_P2.png';
import BoyS3P3 from './assets/BoyScene3_P3.png';
import BoyS4P1 from './assets/BoyScene4_P1.png';
import BoyS4P2 from './assets/BoyScene4_P2.png';
import BoyS4P3 from './assets/BoyScene4_P3.png';
import Scene1 from './assets/Scene1.png';
import Scene2 from './assets/Scene2.png';
import Scene3 from './assets/Scene3.png';
import Scene4 from './assets/Scene4.png';
import Scene5 from './assets/Scene5.png';
import Overlay from './Overlay.js';

function App() {
const length = 3000;
const [start, setStart] = useState(false);

window.onscroll = function(ev) {
  console.log(window.pageYOffset);
  (window.pageYOffset >= 100) ? setStart(true) : setStart(false); 
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // window.location.replace("https://www.w3schools.com");
  }
};
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

  return (
    <Fragment>
      {!start ? <Overlay /> : ""}
      <ParallaxProvider>
        <Controller>
          <div className="container">
            <Parallax className="reset-class" y={['600px', '600px']} x={['0px','100px']}>
                <img className="boy boy1" src={BoyS1}/>
            </Parallax>
            <Parallax className="reset-class" y={['1800px', '1800px']} x={['0px','100px']}>
                <img className="boy boy2" src={BoyS2P1}/>
            </Parallax> 
            <Parallax className="reset-class" y={['3000px', '3000px']} x={['0px','100px']}>
                <img className="boy boy3" src={BoyS2P2}/>
            </Parallax>
            <Parallax className="reset-class" y={['4200px', '4200px']} x={['0px','100px']}>
                <img className="boy boy4" src={BoyS3P1}/>
            </Parallax>
            <Parallax className="reset-class" y={['5400px', '5400px']} x={['0px','100px']}>
                <img className="boy boy5" src={BoyS3P2}/>
            </Parallax>
            <Parallax className="reset-class" y={['6600px', '6600px']} x={['0px','100px']}>
                <img className="boy boy6" src={BoyS3P3}/>
            </Parallax>
            <Parallax className="reset-class" y={['7800px', '7800px']} x={['0px','100px']}>
                <img className="boy boy7" src={BoyS4P1}/>
            </Parallax>
            <Parallax className="reset-class" y={['9000px', '9000px']} x={['0px','100px']}>
                <img className="boy boy8" src={BoyS4P2}/>
            </Parallax>
            <Parallax className="reset-class" y={['10200px', '10200px']} x={['0px','100px']}>
                <img className="boy boy9" src={BoyS4P3}/>
            </Parallax>
            <Scene duration={300} pin enabled offset={300}>
            <img className="Scene" src={Scene1}/>
            </Scene>
            <Scene duration={1500} pin enabled offset={300}>
            <img className="Scene" src={Scene2}/>
            </Scene>
            <Scene duration={2700} pin enabled offset={300}>
            <img className="Scene" src={Scene3}/>
            </Scene>
            <Scene duration={3000} pin enabled offset={300}>
            <img className="Scene" src={Scene4}/>
            </Scene>
            <Scene duration={3000} pin enabled offset={300}>
            <img className="Scene" src={Scene5}/>
            </Scene>
          </div>
        </Controller>
      </ParallaxProvider>
    </Fragment>
  );
}

export default App;
