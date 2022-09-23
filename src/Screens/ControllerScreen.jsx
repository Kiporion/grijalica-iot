import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react"
import { db } from "../firebase"


const ControllerScreen = () => {
  const [jacina, setJacina] = useState(0);

  useEffect(() => {
   onValue(ref(db), snapshot => {
    const data = snapshot.val();
    setJacina(data.jacina);
   });
  }, []);

  const pojacaj = () => {
    jacina < 5 && set(ref(db, '/jacina'), jacina + 1);
  }

  const smanji = () => {
    jacina > 0 && set(ref(db, '/jacina'), jacina - 1);
  }

  const on = () => {
    jacina == 0 && set(ref(db, '/jacina'), 1);
  }

  const off = () => {
    jacina > 0 && set(ref(db, '/jacina'), 0);
  }

  return (
    <>
      <h1>{jacina}</h1>
      <button onClick={on}>ON</button>
      <button onClick={off}>OFF</button>
      <button onClick={pojacaj}>POJACAJ</button>
      <button onClick={smanji}>SMANJI</button>
    </>
  )
}

export default ControllerScreen