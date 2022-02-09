import {useState, useEffect} from 'react'
import {db} from '../firestore.js'
import Card from '../Components/Card'
import './List.scss'
import { useNavigate } from "react-router-dom"
import {
    getStorage,
    ref,
    listAll,
    getDownloadURL,
    deleteObject,
    uploadBytesResumable
  } from 'firebase/storage'

const ListDataImage = () => {
    const [search, setSearch] = useState()
    const [images, setImages] = useState([])
    const [proprietarios, setProprietarios] = useState([])
    const [propId, setPropId] = useState([])
    const [searchProp, setSearchProp] = useState([])
    let navigate = useNavigate()  

    const listItem = () => {
        setImages([])
        const storage = getStorage()
        const listRef = ref(storage, search)
    
        listAll(listRef)
          .then(res => {
            res.items.forEach((item) => {
              getDownloadURL(item)
                .then((url) => {
                  setImages(prevState => [...prevState, { url: url, referencia: item }])
                })
            })
          })
          //.then(fetchProprietarios())
          .catch(err => {
            alert(err.message);
          })
    }

    const fetchProprietarios =  () => {    
        const propFilter = proprietarios.filter(proprietario => proprietario.nome === search)
        setSearchProp(propFilter)
        console.log(search)
        listItem()
    }

    useEffect( async () => {
        const response = db.collection('proprietarios')
        const data =  await response.get()    
        data.docs.forEach(item=>{
          setProprietarios(prevState => [...prevState, item.data()])
          setPropId(prevState => [...prevState, item.id])
        })    
        const propFilter = proprietarios.filter(proprietario => proprietario.nome == '')
        setSearchProp(propFilter)
    },[])



    return(
        <div className='ContainerList'>
            <div>
                <button onClick={() => navigate(`/`)}>Home</button>
                <button onClick={() => navigate(`/storage`)}>Storage</button>
                <button onClick={() => navigate(`/firestore`)}>Firestore</button>
            </div>
            <h3>Busca completa</h3>
            <input onChange={(event) => setSearch(event.target.value)} />
            <button onClick={() => fetchProprietarios()}>List</button>
            <div className='containerItems'>
                <div className='images'>
                    {
                        images &&
                        images.map((image, index) => (
                        <div className='content'>
                            <img key={index} src={image.url} alt='imagem geral' /*onClick={() => setImageZoom(image.url)*/ />
                            {/*<button onClick={() => handleDelete(image.referencia)}>Excluir Imagem</button>*/}
                            
                        </div>
                        ))                
                    }
                </div>
                <div className='Cards'>
                    {
                        searchProp.length > 0 &&                                    
                        searchProp.map((proprietario, index) => ( 
                                           
                            <Card
                            nome={proprietario.nome}
                            email={proprietario.email}
                            telefone={proprietario.telefone}
                            endereco={proprietario.endereco}
                            id={propId[index]}              
                            //handleDelete={handleDelete}
                            key = {index}
                            />  
                                      
                        ))           
                        
                    }
                </div>                
            </div>
        </div>
    )
}

export default ListDataImage