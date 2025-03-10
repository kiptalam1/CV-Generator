import Header from './Components/Header.jsx';
import './Styles/Header.css';
import GeneralInfo from './Components/General.jsx';
import './Styles/General.css';
import Education from './Components/Education.jsx';
import './Styles/Education.css';
import Experience from './Components/PracticalExp.jsx';
import './Styles/PracticalExp.css';


function App() {
    return (
        <>
            <Header />
            <GeneralInfo />
            <Education />
            <Experience />
        </>
    )
}
export default App
