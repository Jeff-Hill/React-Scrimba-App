import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"


function App() {
  return (
      <div className="App">
        <h1>To Do List</h1>
          <div className="App-header">
            <label htmlFor="task_one">Task One</label>
            <input name="task_one" type="checkbox"/>
            <p>Placeholder Text</p>

            <label htmlFor="task_two">Task Two</label>
            <input name="task_two" type="checkbox"/>
            <p>Placeholder Text</p>

            <label htmlFor="task_three">Task Three</label>
            <input name="task_three" type="checkbox"/>
            <p>Placeholder Text</p>

            <label htmlFor="task_four">Task Four</label>
            <input name="task_four" type="checkbox"/>
            <p>Placeholder Text</p>
          </div>


      </div>
    // <div>
    //   < Header />
    //   < MainContent />
    //   <Footer/>
    // </div>
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
    //   <main>
    //     <p>
    //       This is where most of the content will go
    //     </p>
    //   </main>
    // </div>
  );
}

export default App;
