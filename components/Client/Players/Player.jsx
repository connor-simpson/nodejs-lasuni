
import { Sprite } from '@inlet/react-pixi'
import Textarea from './../Form/Textarea'
import Button from './../Form/Button'
import { usePanel } from '../../../contexts/PanelContext'

const Player = props => {

    const handleClick = e => document.dispatchEvent(new CustomEvent("playerClicked", {
        bubbles: true,
        detail: {
            title: props.username,
            show: true,
            close: true,
            children: <> 
                <h5>Created</h5>
                <p>28th January 2021</p>
                <h5>Mission</h5>
                <Textarea readOnly value={props.mission}></Textarea>
                <Button className={`mr-2`}>Add friend</Button>
            </>
        }
    }))

    const playerProps = {
        image: "assets/avatar/rightBack.png",
        x: props.x || 160,
        y: props.y || 290,
        interactive: true,
        pointerdown: handleClick
    }

    return <>
        <Sprite
            {...props}
            {...playerProps}
        />
    </>
}
export default Player