import React from 'react';
import { First, Second } from './pages/page';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Routes>
        <Link to="/first"><h3>첫 번째 페이지</h3></Link>
        <Link to="/Second"><h3>두 번째 페이지</h3></Link>
        <Link to="/"><h3>Home</h3></Link>
      </BrowserRouter>
    );
  }
}

export default App;