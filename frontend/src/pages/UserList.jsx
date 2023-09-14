import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import UsersTable from '../components/home/UsersTable';

const UserList = () => {
    const [users, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/users')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, []);
    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3x1 my-8'> Users List</h1>
                <Link to='/users/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4x1' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (<UsersTable users={users} />
            )}
        </div>
    );
};

export default UserList;