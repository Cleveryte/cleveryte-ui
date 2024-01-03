import './App.css'
import Header from './components/Header'
import Introduction from './views/Docs/GettingStarted/Introduction';
import BlogView from './views/BlogView';
import BlogPostView from './views/BlogPostView';
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Themes from './views/Docs/GettingStarted/Themes';
import Responsive from './views/Docs/GettingStarted/Responsive';
import Customization from './views/Docs/GettingStarted/Customization';
import Accordion from './views/Docs/Components/Accordion';
import Alerts from './views/Docs/Components/Alerts';
import Breadcumb from './views/Docs/Components/Breadcumb';
import ButtonGroup from './views/Docs/Components/ButtonGroup';
import Buttons from './views/Docs/Components/Buttons';
import Cards from './views/Docs/Components/Cards';
import Carousel from './views/Docs/Components/Carousel';
import Collapse from './views/Docs/Components/Collapse';
import Dropdowns from './views/Docs/Components/Dropdowns';
import Lists from './views/Docs/Components/Lists';
import Modal from './views/Docs/Components/Modal';
import Navbar from './views/Docs/Components/Navbar';
import NavTabs from './views/Docs/Components/NavTabs';
import Tables from './views/Docs/Components/Tables';
import Toast from './views/Docs/Components/Toast';
import License from './views/Docs/About/License';
import Team from './views/Docs/About/Team';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/blog" element={<BlogView />} />
          <Route path="/blog/:id" element={<BlogPostView />} />
             {/* GETTING STARTED */}
          <Route path="/" element={<Introduction />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/responsive" element={<Responsive />} />
          <Route path="/customization" element={<Customization />} />
             {/* COMPONENTS */}
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/breadcumb" element={<Breadcumb />} />
          <Route path="/buttongroup" element={<ButtonGroup />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/collapse" element={<Collapse />} />
          <Route path="/dropdowns" element={<Dropdowns />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/navtabs" element={<NavTabs />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/Toast" element={<Toast />} />
          <Route path="/license" element={<License />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
