import { useNavigate } from "react-router-dom"
import './homeStyle.scss'


const Home = () => {
    let navigate = useNavigate()
    return(
        <div className='homeContainer'>            
            <button onClick={() => navigate(`storage`)}>Storage</button>
            <button onClick={() => navigate(`firestore`)}>Firestore</button>
        </div>
    )
}

export default Home