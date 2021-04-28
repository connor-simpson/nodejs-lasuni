import React, { useState, createContext, useContext, useEffect } from 'react'
import Panel from '../../components/Client/Panel'
export const PanelContext = createContext({})

export const usePanel = () => useContext(PanelContext)

const useMountEffect = func => useEffect(func,[func])

export const PanelProvider = ({ children }) => {

    const [panels, setPanels] = useState({})

    useMountEffect(() => {

        document.addEventListener("playerClicked", e => {
            addPanel(e.detail)
        })
        
    });

    const addPanel = (newPanel) => {
        const panelJson = JSON.stringify(newPanel)
        if(panels[panelJson]) return
        setPanels({...panels, [panelJson]:newPanel})
    }

    const removePanel = (panelKey) => () => {
        const {[panelKey]:omit, ...rest} = panels
        setPanels(rest)
    }

    return <PanelContext.Provider  value={{panels, addPanel}}>
        
        {Object.keys(panels).map( (panelKey, key) => <Panel onClose={removePanel(panelKey)} key={key} {...panels[panelKey]} />)}

        {children}
    </PanelContext.Provider>

}