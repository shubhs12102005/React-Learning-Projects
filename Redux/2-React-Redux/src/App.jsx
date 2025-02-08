import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import Controlls from './components/Controlls'
import Local from './components/Local'
import { useSelector } from 'react-redux';
import Private from './components/Private';

function App() {

 const privacy = useSelector(store => store.privacy)

  return (
    <>
      <div className="card">
       <Header />
       {privacy ? <Private /> :  <Local />}
        <div className="card-body text-center">
            <Controlls />
        </div>
      </div>
    </>
  );
}

export default App;
