// create your App component here
import React, { useEffect, useState } from 'react'

const App = () => {
    const [dogPic, setDogPic] = useState(''); //set to "null" will also work

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            //console.log(data.message)
            setDogPic(data.message)
        });
    }, []); //empty dependencies arr
    
    //Display a <p> tag with the text of "Loading..." when the component is first rendered   
    if(!dogPic) return <p>Loading...</p>

    return <img src={dogPic} alt="A Random Dog" />

    // Refactored from:
    // if(!dogPic === true) {
    //     return <p>Loading...</p>;
    // } else {
    //     return <img src={dogPic} alt="A Random Dog" />
    // }

}



export default App