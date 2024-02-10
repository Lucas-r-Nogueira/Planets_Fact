import './App.css';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import PlanetImage from './components/PlanetImage/PlanetImage';
export default function App() {
    return (
        <>
            <Header/>
            <div className="container__body">
                <PlanetImage/>
                <div className="container__body_information">
                    <Information/>
                </div>
            </div>
        
        </>
    );
};