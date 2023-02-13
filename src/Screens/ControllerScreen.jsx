import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react"
import { db } from "../firebase"
import '../Styles/ControllerScreenStyle.css'


const ControllerScreen = () => {
  const [jacina, setJacina] = useState(0);

  useEffect(() => {
   onValue(ref(db), snapshot => {
    const data = snapshot.val();
    setJacina(data.jacina);
   });
  }, []);

  const pojacaj = () => {
    jacina < 5 && jacina > 0 && set(ref(db, '/jacina'), jacina + 1);
  }

  const smanji = () => {
    jacina > 1 && set(ref(db, '/jacina'), jacina - 1);
  }

  const on = () => {
    jacina === 0 && set(ref(db, '/jacina'), 1);
  }

  const off = () => {
    jacina > 0 && set(ref(db, '/jacina'), 0);
  }

  return (
    <div className="controllercontainer">
      <div className="jacinacontainer">
        <h1 className="jacina">{jacina}</h1>
      </div>
      <div className="btnContainer">
        <button onClick={on} className="btn">ON</button>
        <button onClick={off} className="btn">OFF</button>
      </div>
      <br /><br />
      <div className="btnContainer">
        <button onClick={pojacaj} className="btn2" id="btnup">POJACAJ</button>
        <button onClick={smanji} className="btn2" id="btndwn">SMANJI</button>
      </div>
    </div>
  )
}

export default ControllerScreen