import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import MainPage from './Pages/MainPage';
import TaskPage from './Pages/TaskPage';

function App() {


  return (
    <div className="app_container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/rakshit' element={<TaskPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
