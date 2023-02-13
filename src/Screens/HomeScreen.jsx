import { onValue, ref } from 'firebase/database'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import heater from '../Material/heater.png'
import '../Styles/HomeScreenStyle.css'

const HomeScreen = () => {
  const [jacina, setJacina] = useState(0);
  const divs=document.getElementsByClassName("bar")
  const thisBody= document.querySelector("body");

  function startHeater() {
    thisBody.style="background-color:white;"
      switch(jacina){
        case(0): 
        for(const div of divs){
          if(div.style.backgroundColor!=="gray"){
            div.style ="transition:background-color 5s;background-color:gray";
          }
        }
          break;
        case(1): 
        divs[0].style="transition:background-color 5s;background-color:orange;"
        divs[1].style="transition:background-color 5s;background-color:gray;"
        divs[2].style="transition:background-color 5s;background-color:gray;"
        divs[3].style="transition:background-color 5s;background-color:gray;"
        divs[4].style="transition:background-color 5s;background-color:gray;"
          break;
        case(2): 
        divs[1].style="transition:background-color 5s;background-color:orange;"
        divs[2].style="transition:background-color 5s;background-color:gray;"
        divs[3].style="transition:background-color 5s;background-color:gray;"
        divs[4].style="transition:background-color 5s;background-color:gray;"
          break;
        case(3):
        divs[2].style="transition:background-color 5s;background-color:orange;"
        divs[3].style="transition:background-color 5s;background-color:gray;"
        divs[4].style="transition:background-color 5s;background-color:gray;"
            break;
        case(4):
        divs[3].style="transition:background-color 5s;background-color:orange;"
        divs[4].style="transition:background-color 5s;background-color:gray;"
          break;
        case(5):
        divs[4].style="transition:background-color 5s;background-color:orange;"
          break;
        default:
          break;
      }
  }

  useEffect(() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val();
      setJacina(data.jacina); 
    });
  }, []);
  startHeater();
  return (
    <>
        <div className='heatercontainer'>
          <div id='firstBar' className="bar">Prvi Bar</div>
          <div id='secondBar' className="bar">Drugi Bar</div>
          <div id='thirdBar' className="bar">Treci Bar</div>
          <div id='fourthBar' className="bar">Cetvrti Bar</div>
          <div id='fifthBar' className="bar">Peti Bar</div>
          
          <img id='heater' src={heater} alt=""  style={{width: '500px'}}/>
       </div>
    </>
  )
}

export default HomeScreen