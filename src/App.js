import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Book from './pages/books';
import Category from './pages/category';
import './App.css';

function App() {
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
