import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Storage from './Storage'
import Firestore from "./AddFirestore"
import ListDataImage from "./ListDataImage"
import Grid from './Grid'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="storage" element={<Storage />} />
        <Route path="firestore" element={<Firestore />} />
        <Route path='ListData' element={<ListDataImage/>} />
        <Route path='grid' element={<Grid/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App