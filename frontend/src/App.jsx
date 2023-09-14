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

import CreateBorrow from './pages/CreateBorrow';
import EditBorrow from './pages/EditBorrow';
import ShowBorrow from './pages/ShowBorrow';
import DeleteBorrow from './pages/DeleteBorrow';
import Borrow from './pages/BorrowList.jsx';

import CreateStock from './pages/CreateStock';
import EditStock from './pages/EditStock';
import ShowStock from './pages/ShowStock';
import DeleteStock from './pages/DeleteStock';
import Stock from './pages/StockList.jsx';

//import CreateGenre from './pages/CreateGenre';
//import EditGenre from './pages/EditGenre';
//import ShowGenre from './pages/ShowGenre';
//import DeleteGenre from './pages/DeleteGenre';
//import Genre from './pages/GenreList.jsx';




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
      <Route path='/borrow' element={<Borrow />} />
      <Route path='/borrow/create' element={<CreateBorrow />} />
      <Route path='/borrow/details/:id' element={<ShowBorrow />} />
      <Route path='/borrow/edit/:id' element={<EditBorrow />} />
      <Route path='/borrow/delete/:id' element={<DeleteBorrow />} />
      <Route path='/stock' element={<Stock />} />
      <Route path='/stock/create' element={<CreateStock />} />
      <Route path='/stock/details/:id' element={<ShowStock />} />
      <Route path='/stock/edit/:id' element={<EditStock />} />
      <Route path='/stock/delete/:id' element={<DeleteStock />} />
      <Route path='/genre' element={<Stock />} />
      <Route path='/genre/create' element={<CreateGenre />} />
      <Route path='/genre/details/:id' element={<ShowGenre />} />
      <Route path='/genre/edit/:id' element={<EditGenre />} />
      <Route path='/genre/delete/:id' element={<DeleteGenre />} />
    </Routes>
    )
}

export default App
