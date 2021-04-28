import { useEffect, useState } from 'react'

import Bar from "../components/Client/Bar/Bar"
import Layout from "../components/Client/Layout"
import Bubble from "../components/Client/Bubble"
import BubbleLayer from '../components/Client/BubbleLayer'
import Panel from "../components/Client/Panel"
import Textarea from "../components/Client/Form/Textarea"
import Button from "../components/Client/Form/Button"

import { usePanel } from '../contexts/PanelContext'

import dynamic from 'next/dynamic'


const Room = dynamic(import("../components/Client/Room"), {
    ssr: false
})

const Game = () => {

    return <Layout>
        <Room />
    </Layout>
}

export default Game