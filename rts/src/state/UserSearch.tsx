import { useState } from "react";

type User = {
    name : string;
    age:number;
}

const users : User[] = [
    {
        name : "Sarah",age:20
    },
    {
        name:"Alex",
        age : 20
    },
    {
        name : 'Michael',
        age:20
    }
];



const UserSearch : React.FC = () => {
    const [name,setName] = useState<string>('');
    const [user,setUser] = useState<User | undefined>();
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })

        setUser(foundUser);



    }
    return <div>
        User Search 
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch;