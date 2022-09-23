import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react"
import { db } from "../firebase"


const ControllerScreen = () => {

  const [jacina, setJacina] = useState(100);

  useEffect(() => {
   onValue(ref(db), snapshot => {
    const data = snapshot.val();
    setJacina(data.jacina);
   });
  }, [])
  
  return (
    <>
      <h1>{jacina}</h1>
      <button>ON</button>
      <button>OFF</button>
      <button>POJACAJ</button>
      <button>SMANJI</button>
    </>
  )
}

export default ControllerScreen