import './App.css'
import Header from './components/Header'
import DocumentationView from './views/DocumentationView';
import BlogView from './views/BlogView';
import BlogPostView from './views/BlogPostView';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DocumentationView />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/blog/:id" element={<BlogPostView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
