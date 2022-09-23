import { onValue, ref } from 'firebase/database'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../firebase'
import propeller from '../Material/propeller4.png'
import '../Styles/HomeScreenStyle.css'

const HomeScreen = () => {
  const [jacina, setJacina] = useState(0);

  useEffect(() => {
    onValue(ref(db), snapshot => {
     const data = snapshot.val();
     setJacina(data.jacina);
    });
   }, []);
  return (
    <>
        <br /><br /><br /><br /><br /><br />
        <div className='propellercontainer'>
          <img src={propeller} alt="" className={`rotating${jacina}`} />
        </div>
    </>
  )
}

export default HomeScreen