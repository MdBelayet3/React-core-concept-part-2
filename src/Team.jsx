import { useState } from "react"

export default function Team(){
    const teamStyle = {
        border: '2px solid violet',
        padding: '15px',
        margin: '15px',
        borderRadius: '30px'
    }
    const [team, setTeam] = useState(0);
    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () =>{
        const newTeam = team - 1;
        setTeam(newTeam);
    }

    return(
        <div style={teamStyle}>
            <h3>Players :{team}</h3>
            <button className="btn" onClick={handleAdd}>Add</button>
            <button style={{marginLeft:'15px'}} className="btn" onClick={handleRemove}>Remove</button>
        </div>
    )
}