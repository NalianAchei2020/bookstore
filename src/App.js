import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/header';
import Book from './pages/books';
import Category from './pages/category';
import { getBooks} from './redux/books'
import './App.css';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
      
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
