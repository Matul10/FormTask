import './Home.css'
import {useData} from './Context/DataContext'
import { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
export default function Home(){

    const {data,setData} = useData();
    let timer = useRef();

    useEffect(()=>{
        timer.current=setTimeout(()=>{
            console.log(data.firstName,data.lastName)
        },1000)
        return ()=>{
            clearTimeout(timer.current);
        }
    },[data])

    return(
        
        <div id='cont'>
            <div>
                
                    <input className='input' placeholder='Enter first name' value={data.firstName} onChange={(e)=>{setData((prev)=>({...prev,firstName:e.target.value}))}}/>
                    <input className='input' placeholder='Enter last name' value={data.lastName} onChange={(e)=>{setData((prev)=>({...prev,lastName:e.target.value}))}}/>
                    <Link to="/greeting"><button id='submit'>Submit</button></Link>
                
            </div>
        </div>
        
    )
}