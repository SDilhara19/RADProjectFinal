import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { FaBook } from 'react-icons/fa';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, {});

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        margin: '15px',
        display: 'flex',
        flexDirection: 'row', // Display items vertically
        alignItems: 'center',
        backgroundColor: '#63520d', // Colorful background
        padding: '36px', // Add some padding
        borderRadius: '30px', // Add rounded corners
    };

    const iconWrapperStyle = {
        marginBottom: '10px',
    };

    const pageStyle = {
        backgroundColor: '#877321',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
      <div
        style={{
          backgroundImage: `url(https://wallpaperaccess.com/full/124383.jpg)`,
          pageStyle,
        }}
      >
        <h1
          className="text-7xl my-4"
          style={{ color: "white", fontSize: "3rem" }}
        >
           HOME
        </h1>

        <Link to="/books/ShowBook" style={linkStyle}>
          <FaBook className="text-Black text-5xl" /> {/* Book Icon */}
          <p className="text-Black text-3xl">BOOKS</p>{" "}
          {/* Text with white color */}
        </Link>

        <Link to="/books/CreateBook" style={linkStyle}>
          <FaBook className="text-Black text-5xl" /> {/* Book Icon */}
          <p className="text-Black text-3xl">USERS</p>{" "}
          {/* Text with white color */}
        </Link>

        <Link to="/books/DeleteBook" style={linkStyle}>
          <FaBook className="text-Black text-5xl" /> {/* Book Icon */}
          <p className="text-Black text-3xl">BORROWS</p>{" "}
          {/* Text with white color */}
        </Link>

        <Link to="/books/EditBook" style={linkStyle}>
          <FaBook className="text-Black text-5xl" /> {/* Book Icon */}
          <p className="text-Black text-3xl">STOCKS</p>{" "}
          {/* Text with white color */}
        </Link>

        <Link to="/books/ShowBook" style={linkStyle}>
          <FaBook className="text-Black text-5xl" /> {/* Book Icon */}
          <p className="text-Black text-3xl">GENRES</p>{" "}
          {/* Text with white color */}
        </Link>
      </div>
    );
};

export default Home;
