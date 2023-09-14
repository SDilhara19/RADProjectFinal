import React, { useEffect, useState } from 'react';
//import Layout from '../components/Layout';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'


 

const Home = () => {
    return (
      <div className='text-center'>
        <h1 className='text-3xl my-4'>Home Page</h1>
        <div className="flex justify-center space-x-4 my-4">
          <Link to='/books/bookList'>
            <img
              src='../assets/userimage.jpg'
              alt='Books'
              className='w-32 h-32 rounded-full cursor-pointer'
            />
          </Link>
          <Link to='/users/userList'>
            <img
              src='/path/to/your/image2.jpg'
              alt='Users'
              className='w-32 h-32 rounded-full cursor-pointer'
            />
          </Link>
          <Link to='/topic3'>
            <img
              src='/path/to/your/image3.jpg'
              alt='Topic 3'
              className='w-32 h-32 rounded-full cursor-pointer'
            />
          </Link>
          <Link to='/topic4'>
            <img
              src='/path/to/your/image4.jpg'
              alt='Topic 4'
              className='w-32 h-32 rounded-full cursor-pointer'
            />
          </Link>
        </div>
      </div>
    );
  };
  
  export default Home;