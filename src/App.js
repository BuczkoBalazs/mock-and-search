import React, { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch("https://www.testdomain.com/v1/api/books");
    const resJson = await response.json();
    console.log(resJson);
    setBooks(resJson);
    setLoading(false);
  };
  
  useEffect(()=>{
    setLoading(true);
    fetchBooks();
  }, []);

  return (
    <div className="App">
      {loading ? "undor loading" : 
        books.map((book) => <div>{book.title}{book.author}{book.year}</div>)
      }
    </div>
  );
}

export default App;
