import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{ border: '2px solid tomato', borderRadius: '30px', marginBottom: '55px', padding: '30px' }}>
            <h3>Counter :{count}</h3>
            <button className="btn" onClick={handleAdd}>Add</button>
            <button style={{ marginLeft: '15px'}} className="btn" onClick={handleReduce}>Reduce</button>
        </div>
    )
}