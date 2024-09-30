
//import './App.css';
//import Man from './app/component/array';
//import Arise from './app/component/array/wednesday';
//import ColorBox2 from './app/component/box';
//import ColorBox from './app/component/colorbox';
//import Counter from './app/component/counter';
import { Route, Routes } from 'react-router-dom';
import Game from './app/component/game';
import StartGame from './app/component/game/start';
import Welcome from './app/component/greetings';
import LoginForm from './app/component/login';
import { Newjsx } from './app/component/new jsx';
import PaintDot from './app/component/touch';
import { UserList } from './app/component/users/array';
import UserDetail from './app/component/users';
import NotFound from './app/component/notfoundpage';
import Effect from './app/component/effect';
import Pap from './app/component/time/time';

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Ejhoke" />
      <Newjsx />
      <Man />
      <Arise/>
      <Counter/> */}
      {/* <ColorBox/>
      <ColorBox2/>
      <LoginForm/> */}
      {/* <PaintDot/>
      <Game/> */}
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/loginform' element={<LoginForm replace to ="/login" />} />
        <Route path='/user' element={<UserDetail />} />
        <Route path= "*" element= {<NotFound/>} />
        <Route path='/effect' element = {<Effect/>} />
        <Route path='/' element = {<Pap/>} />
      </Routes>
    </div>
  );
}

export default App;
