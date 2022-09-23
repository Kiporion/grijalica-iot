import propeller from '../Material/propeller4.png'
import '../Styles/HomeScreenStyle.css'

const HomeScreen = () => {
  return (
    <>
        <br /><br /><br /><br /><br /><br />
        <div className='propellercontainer'>
            {/* <img src={propeller} alt="" style={{transform: "rotate(50deg)"}} /> */}
            <img src={propeller} alt="" className='rotating' />
        </div>
    </>
  )
}

export default HomeScreen