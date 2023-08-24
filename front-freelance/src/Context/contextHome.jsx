// ColorContext.js
import {createContext, useContext, useState } from 'react';

const StateContext = createContext({    
                                        currentUser:{}, 
                                        userToken: {},
                                        setCurrentUser: ()=> {},
                                        setUserToken: ()=> {}
                                    });


export const ContextProvider =({children})=>{
        const [currentUser, setCurrentUser]= useState({});
        const [userToken, _setUserToken] = useState({});
        const setUserToken = (token)=>{
            if(token){
                localStorage.setItem('Token', token)
            }else{
                localStorage.removeItem('Token')
            }
            _setUserToken(token)
        }
    
    return(
        <StateContext.Provider value={{currentUser, userToken , setCurrentUser, setUserToken}}>
                {children}
        </StateContext.Provider>
    )
   
}

export const useStateContext = ()=> useContext(StateContext)
