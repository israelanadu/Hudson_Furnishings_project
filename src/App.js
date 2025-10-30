import { Component } from 'react';
import Landing from './pages/landing';
import About from './pages/about';
import Contact from './pages/contact';
import Product from './pages/product';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ScrollToTop from './component/scrollToTop';


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/product" element={<Product />} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
