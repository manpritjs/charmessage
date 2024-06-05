'use client'
import {useState} from 'react'
function CharacterDisplay({chars}){
    const [msg, setMsg] = useState("")
    const fetchMessage = async (id) => {
      try {
        const response = await fetch(`http://localhost:3001/api/chars/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMsg(data.message);
      } catch (err) {
        setError("Failed to fetch message");
      }
    };
    return(
        <>
        {chars.map(char => (
          <span key={char._id}
                className="mr-3.5 text-xl text-orange-500 bg-lime-300"
                onMouseEnter={() => fetchMessage(char._id)}
                onMouseLeave={() => setMsg("")}
           >{char.character}</span>
        ))}
        {msg && <p>{msg}</p>}
      </>
    );

}
export default CharacterDisplay;