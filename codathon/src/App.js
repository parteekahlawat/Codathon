import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './templates/signin';
import Moodinput from './templates/moodpage';
function App() {
  return (
    <>

    <Routes>
    <Route  path="/" element={<SignInPage title="Sutherland"/>}/>
      <Route  path="/moodpage" element={<Moodinput/>}/>
    </Routes>
    </>
  );
}

export default App;
