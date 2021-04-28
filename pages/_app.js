import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import "react-isometric-tilemap/build/css/index.css";
import { PanelProvider } from '../contexts/PanelContext'
import dynamic from 'next/dynamic';

const Lasuni = ({Component, pageProps}) => {

  
  return <PanelProvider>
      <Component {...pageProps} />
    </PanelProvider>

  

}


export default Lasuni