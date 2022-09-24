import { onValue, ref } from 'firebase/database'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import propeller from '../Material/propeller4.png'
import '../Styles/HomeScreenStyle.css'
import zvuk from '../Material/zvukVentilatora.mp3'
import { useRef } from 'react'

const HomeScreen = () => {
  const [jacina, setJacina] = useState(0);

  const [play, setPlay] = useState(false);
  const myRef = useRef();  

  function playSound() {
    if(play === true){
      myRef.current.play();
      switch(jacina){
        case(0): 
          myRef.current.volume = 0.0;
          break;
        case(1): 
          myRef.current.volume = 0.2;
          break;
        case(2): 
          myRef.current.volume = 0.4;
          break;
        case(3):
          myRef.current.volume = 0.6;
            break;
        case(4):
          myRef.current.volume = 0.8;
          break;
        case(5):
          myRef.current.volume = 1;
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val();
      setJacina(data.jacina); 
    });
  }, []);

  playSound();
  return (
    <>
    <audio ref={myRef} src={zvuk}/>
        <br /><br /><br /><br /><br /><br />
        <div className='propellercontainer'>
          <img src={propeller} alt="" onClick={() => setPlay(!play)} className={`rotating${jacina}`} style={{width: '500px'}}/>
        </div>
    </>
  )
}

export default HomeScreen