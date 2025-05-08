
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Router/Navbar';
import Home from './components/Router/Home';
import About from './components/Router/About';
import UserProfile from './components/Router/UserProfile';
// import SimpleForm from './components/validation/SimpleForm';
// import NameForm from './components/context-api/NameForm';
// import NameProvider from './components/context-api/NameProvider';
// import UncontrolledApp from './components/UncontrolledApp';
// import UncontrolledLogin from './components/UncontrolledLogin';

function App() {
  return(
    <>
    {/* <UncontrolledApp/> */}
    {/* <UncontrolledLogin/> */}
    {/* <NameProvider>
      <NameForm/>
    </NameProvider> */}
    {/* <SimpleForm/> */}
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/users/:id" element={<UserProfile/>}/>
      </Routes>
    </BrowserRouter>


  </>
  )
}
export default App;