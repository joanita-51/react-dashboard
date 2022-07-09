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

    const [screenSize, setScreenSize] = useState(undefined)

    const [currentColor, setCurrentColor] = useState('#03C9D7')

    const [currentMode, setCurrentMode] = useState('Light')

    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
        // to close the side bar imediately the theme chosen
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color)
        // to close the side bar imediately the theme chosen
        setThemeSettings(false);
    }


    return (
        <StateContext.Provider 
            value ={{
                activeMenu,
                setActiveMenu,
                isClicked, // to get acess to them inside of the navbar
                setisClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setColor,
                setMode,
                themeSettings,
                setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

//to use the active menu in our side bar

export const useStateContext = () => useContext(StateContext)