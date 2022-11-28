import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, useAppDispatch, useAppSelector } from "../state";


export const RepositoryList : React.FC = () => {
    const [term,setTerm] = useState('');
    const dispatch = useAppDispatch();
    const { data,error,loading } = useAppSelector(state => state.reducers.repositories);
       

    const onSubmit = (event : React.FormEvent<HTMLFormElement> ) =>  {
        event.preventDefault();
        dispatch(actionCreators.searchRepositories(term));

    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={term} onChange={e =>  setTerm(e.target.value)} />
            <button type="submit">Search</button>
        </form>
        {
            data && data.map((name : string) => <li>{name}</li> )
        }
    </div>
}