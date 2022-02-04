import react, { useEffect, useState } from "react";
import data from "../mocks/data";


function App() {
    const[imgUrl, setImgUrl] = useState()

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => setImgUrl(data.message))

}, [])

    return (
        <div className="App">
             {imgUrl ? <img src={ imgUrl } alt="A Random Dog" /> : <p> Loading...</p> }
        
            </div>


    );


}
 export default App;