import { useNavigate } from "react-router-dom"
import './homeStyle.scss'


const Home = () => {
    let navigate = useNavigate()
    return(
        <div className='homeContainer'>            
            <button onClick={() => navigate(`storage`)}>Storage</button>
            <button onClick={() => navigate(`firestore`)}>Firestore</button>
            <button onClick={() => navigate(`/ListData`)}>Lista Completa</button>
        </div>
    )
}

export default Home