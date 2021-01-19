
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/js/Home';
import Auth from './pages/js/Auth';
import ProfileReg from './pages/js/ProfileReg';
import StudentReg from './pages/js/StudentReg';
import TeacherReg from './pages/js/TeacherReg';
import MainPage from './pages/js/MainPage';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/authorization/'} component={Auth} />
        {/* <Route path={'/new_user_registration/'} component={ProfileReg} /> */}
        <Route path={'/student_registration/'} component={StudentReg} />
        {/* <Route path={'/teacher_registration/'} component={TeacherReg} /> */}
        <Route path={'/main_active/'} component={MainPage} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
