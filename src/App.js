import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import Login from './login';

function App() {
  return (
    <div className='mx-20 mt-20'>
     <h1 className='text-5xl text-center'> hello welcome to oxygen app</h1>
     <a href='/dashboard'>Go to dashboard</a><br />
     <a href='/login'>Login</a><br />
     <a href='/signup'>Signup</a><br />
    </div>
  );
}

export default App;
