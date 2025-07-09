import './Greeting.css'
import { useData } from './Context/DataContext'
export default function Greeting(){
    const{data} = useData();
    return(
        <>
        <div id='cont'>
            Hello {data.firstName} {data.lastName}
        </div>
        </>
    )
}