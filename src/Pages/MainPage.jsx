import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
    const navigate  = useNavigate();
    const changePage = ()=>{
        navigate('/rakshit')
    }
  return (
    <div className='main_page_container'>
      <h1>Welcome to the Task Tracker</h1>
      {/* work on below thing and make it attractive */}
      <p>It is a simple task tracker where you can assign task Lorem ipsum dolor sit amet consectetur adipisicing </p>
      <button onClick={changePage}>Get Started!</button>
    </div>
  )
}

export default MainPage
