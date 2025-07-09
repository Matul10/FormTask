import { createContext, useContext, useState } from "react"

const context = createContext();
export function DataContext({children}){
    const [data,setData]=useState({firstName:"",lastName:""})
    return(
        <context.Provider value={{data,setData}} >
            {children}
        </context.Provider>
    )
}

export function useData(){
    // console.log("inside useData function")
    return useContext(context);
}