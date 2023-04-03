import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import NewPost from './pages/new-post/NewPost';
import NotFound from './shared/components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/new-post' element={<NewPost />} />
        <Route path='/' element={<Navigate to={'/home'} />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
