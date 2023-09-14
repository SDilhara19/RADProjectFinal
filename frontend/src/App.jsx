import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';
import Books from './pages/Books.jsx';
import CreateUsers from './pages/CreateUser';
import EditUser from './pages/EditUser';
import ShowUser from './pages/ShowUser';
import DeleteUser from './pages/DeleteUser';
import Users from './pages/UserList.jsx';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books' element={<Books />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/create' element={<CreateUsers />} />
      <Route path='/users/details/:id' element={<ShowUser />} />
      <Route path='/users/edit/:id' element={<EditUser />} />
      <Route path='/users/delete/:id' element={<DeleteUser />} />
    </Routes>
    )
}

export default App
