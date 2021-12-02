import './App.css';
import {Greet} from './components/Greet';
import {Geet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import State from './components/State';
import Condition from './components/Condition'
import Style from './components/Style';
import Form from './components/Form';
import Table from './components/Table';
import RefDemo from './components/RefDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import IncrementCounter from './components/IncrementCounter';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/UserContext'

function App() {
  return (
    <div className="App">
      <UserProvider value="muzammil">
        <ComponentC/>
      </UserProvider>
      <IncrementCounter/>
      <ErrorBoundry>
          <Hero heroName='Batman'/>
      </ErrorBoundry>
      <ErrorBoundry>
          <Hero heroName='superman'/>
      </ErrorBoundry>
      <RefDemo/>
      <Table/>
      <Form />
      <Style primary={true} />
      <Condition/>
      <State />
      <Message />
      <Greet name='bruce' title='manager' >
        <p> The details will be provided you on demand</p>
      </Greet>
      <Greet name='clark' title='developer'/>
      <Greet name='diana' title='designer'/>
      <Geet/>
      <Welcome />
      <Hello/>
    </div>
  );
}

export default App;
