import './App.css'
import Header from './components/Header'
import Introduction from './views/Docs/Introduction';
import BlogView from './views/BlogView';
import BlogPostView from './views/BlogPostView';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Themes from './views/Docs/Themes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/blog/:id" element={<BlogPostView />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
