import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem';
import ContactCard from './components/ContactCard';
import Product from './components/Product'
import products from './schoolProducts'
import todoData from './todoData'
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"


function App() {
  const productComponents = products.map(item => <Product key={item.id} product={item} />)
  const todoComponents = todoData.map(task => <ToDoItem key={task.id} task={task} /> )
  return (
      <div >
        <div>
          {productComponents}
        </div>
        <div className="todo-list">
          <h1>To Do List</h1>
          {todoComponents}
        </div>
        <div>
          <ContactCard contact={{
            imgURL:"https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782",
            name: "Little Pup",
            phone: "615-234-3457",
            email: "goldenpups@gmail.com"}}/>
          <ContactCard contact={{
            imgURL:"https://www.petmd.com/sites/default/files/petmd-puppy-weight.jpg",
            name: "Beagle Pup",
            phone: "615-987-9875",
            email: "beaglepup@gmail.com"}} />
          <ContactCard contact={{
            imgURL:"https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg",
            name: "Berniese Pup",
            phone: "615-248-8754",
            email: "berniesepup@gmail.com"}}/>
          <ContactCard contact={{
            imgURL:"https://assets3.thrillist.com/v1/image/2754967/size/tmg-article_tall;jpeg_quality=20.jpg",
            name: "Dalmatian Pup",
            phone: "615-985-5643",
            email: "dalmatianpup@gmail.com"}}/>
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
