import React, { useEffect, useState } from 'react';
//import Layout from '../components/Layout';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'

 

const Home = () => {
    return (
      <div className='text-center'>
        <h1 className='text-3xl my-4'>Home Page</h1>
        <div className="flex justify-center space-x-4 my-4">
            <Link to='/books'>
                    <BiUserCircle className='text-sky-800 text-4xl' style={{ fontSize: '150px' }}/>
            </Link>
            <Link to='/users'>
                    <BiUserCircle className='text-sky-800 text-4xl' style={{ fontSize: '150px' }}/>
            </Link>
            <Link to='/genres'>
                    <BiUserCircle className='text-sky-800 text-4xl' style={{ fontSize: '150px' }}/>
            </Link>
            <Link to='/stocks'>
                    <BiUserCircle className='text-sky-800 text-4xl' style={{ fontSize: '150px' }}/>
            </Link>
            <Link to='/burrowed'>
                    <BiUserCircle className='text-sky-800 text-4xl' style={{ fontSize: '150px' }}/>
            </Link>
        </div>
      </div>
    );
  };
  
  export default Home;