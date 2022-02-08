import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Storage from './Storage'
import Firestore from "./Firestore"

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="storage" element={<Storage />} />
        <Route path="firestore" element={<Firestore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App