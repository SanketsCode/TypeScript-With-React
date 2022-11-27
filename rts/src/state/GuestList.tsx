
import { useState } from "react";



const GuestList : React.FC = () => {

    const [name,setName] = useState<string>('');
    const [guest,setGuest] = useState<string[]>([]);

    const onClick = () => {
        setGuest([...guest,name]);
        setName('');
    }

    return <div>
        <h3>Guest List</h3>
        {
            guest.map(name => (
                <li>{name}</li>
            ))
        }
        <input type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
        </div>
 
}

export default GuestList;