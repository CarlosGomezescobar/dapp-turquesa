import './assets/App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route,Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import Vote from './pages/Vote/Vote';
import Collection from './pages/Collections/Collection';
import EarnDinamic from './pages/Earns/EarnDinamic';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Login from './pages/Login/Login';
import WallectConnect, { WalletContext } from './Providers/WallectConnect';

function App() {
  const [modal,setModal] = useState(false)

  const {address} = useContext(WalletContext);

  useEffect(()=>{
    AOS.init()
  },[])

  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }
  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }
  const toggleModal = ()=>{
    setModal(!modal)
    console.log(modal)
    if(window.innerWidth<800 && !modal){
        disableScroll()
    }else if(window.innerWidth<800 && modal){
        enableScroll()
    }
    }

    const [isAllowed,setIsAllowed] = useState(null)

  return (
    <WallectConnect>
      <div className='container-all'>
          {
            !isAllowed ? <Login isAllowed={isAllowed} setIsAllowed={setIsAllowed}/> : 
            <>
            <Menu />
            <div className='container-right'>
              <Header toggleModal={toggleModal} />
              <div className='container-routes'>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/vote" element={<Vote />} />
                  <Route path="/collection" element={<Collection />} />
                  <Route path="/earn-strategies/:address" element={<EarnDinamic />} />
                </Routes>
              </div>
            </div>
            </>
          }
          
        </div>      
    </WallectConnect>
  );
}

export default App;
