import React,{createContext, useContext, useState} from 'react'

const StateContext = createContext();
const initialState ={
    chat:  false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) =>{
    const [activeMenu, setActiveMenu] = useState(true);

    //making the context to know what to do when an icon is clicked. The initial state is the initial state object because nothing has been clicked at the start
    const [isClicked, setisClicked] = useState(initialState);

    //we are spreading because we can't just override the object with a string and inside the square brackets, we are only changing the value that has been clicked
    const handleClick = (clicked)=>{
        setisClicked({...initialState,[clicked]:true})
    }


    return (
        <StateContext.Provider 
            value ={{
                activeMenu,
                setActiveMenu,
                isClicked, // to get acess to them inside of the navbar
                setisClicked,
                handleClick
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

//to use the active menu in our side bar

export const useStateContext = () => useContext(StateContext)