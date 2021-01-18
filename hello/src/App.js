import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import GreetAll from './components/GreetAll';
import Message from './components/Message';
import WelcomeAll from './components/WelcomeAll';
import FunctionClick from './components/FunctionClick';
import BindingSamp from './components/BindingSamp';
import Quotes from './components/Quotes';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import ProjectFormInput from './components/ProjectFormInput';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
        
        <Message/>
        <Certificates/>
        
        <Projects/>
        
            
        {/*
        <BindingSamp/>
        <FunctionClick/>
        
        
        <GreetAll name ="Kanmani">
          <h4>Have a good day</h4>
        </GreetAll>
        <GreetAll name="Venkat"/>
        <WelcomeAll option="now"/>
        */}
        <Quotes/>
        <ProjectFormInput/>

      </div>
  );
}

export default App;
