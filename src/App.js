import './App.css';
import Books from './components/Books';

import React from 'react';


function App() {
  
  const showBooks = true;
  return (
    <div className="App">
       
      <img className ='rat'
          src={require('./book_rat.jpg')} 
          alt="book-rat" 
        />
        
      <h2 className='h2'>About us</h2>
      <p className = 'paragraph'> In "Knijnia plah 🐀" BOOK for every MOOD we beleive that <br/>
     there is only one thing that could replace a book and that is  the next book. <br/>
     Come on an adventiorus journey of the mind with us.</p>

     
     {showBooks ? (
      <>
      <Books name="Fiction" />
      <Books name="Self-development" />
      <Books name="Comedy" />
      </>
      ) : (
      <p>You can't see the Books.</p>
     )}
    </div>
  );
}


export default App;

