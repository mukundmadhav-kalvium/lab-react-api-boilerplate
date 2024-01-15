import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Books.css";

const Books = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://reactnd-books-api.udacity.com/books", {
          headers: { Authorization: "whatever-you-want" },
        })
        .then((response) => {
          setData(response.data.books);
          //   console.log(response.data);
        })
        .catch((error) => {
          //   console.log(error);
          console.log("Status Code: ", error.request.status);
          if (error.request.status === 404) {
            console.log("Website not found");
          }
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 id="main-heading">Books</h1>
      {data.map((book, id) => (
        <div className="book-container" key={id}>
          <h2>{book.title}</h2>
          <div className="book-description">
            <img src={book.imageLinks.thumbnail} alt="Book Image" />
            <p>{book.description}</p>
          </div>
          <h3>{book.authors}</h3>
        </div>
      ))}
    </>
  );
};

export default Books;
