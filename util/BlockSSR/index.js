import React from 'react'
import { AppProvider, withPixiApp, useApp } from '@inlet/react-pixi'

const BlockSSR = ({ children }) => {

    const app = useApp()

    return <AppProvider app={app} >
        <>{children}</>
    </AppProvider>
}

export default withPixiApp(BlockSSR)