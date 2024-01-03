import './App.css'
import Header from './components/Header'
import Introduction from './views/Docs/Introduction';
import BlogView from './views/BlogView';
import BlogPostView from './views/BlogPostView';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/blog/:id" element={<BlogPostView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
