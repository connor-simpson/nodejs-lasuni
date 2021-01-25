import Bar from "../components/Client/Bar/Bar"
import Layout from "../components/Client/Layout"
import Room from '../components/Client/Room'
import Bubble from "../components/Client/Bubble"
import BubbleLayer from '../components/Client/BubbleLayer'
import { useEffect } from 'react'
//import io from 'socket.io-client'


const Game = () => {

    

    useEffect(() => {

        /*const socket = io('ws://localhost:3001');

        socket.on('connect', () => {
            socket.send("hello!");
        });*/

    })

    return <Layout>
        <Room />
        <Bar />
    </Layout>
}

export default Game