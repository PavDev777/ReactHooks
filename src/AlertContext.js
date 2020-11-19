import React, { useContext, useState, useReducer } from 'react';

const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }

export const AlertProvider = ({children}) => {
    
    const [alert, setAlert] = useState(false)

    const toggleAlert = () => setAlert(prev => !prev)


    
    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggleAlert
        }}>
           
                {children}
           
        </AlertContext.Provider>
    )
}