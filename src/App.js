import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Book from './components/books';
import Category from './components/category';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
