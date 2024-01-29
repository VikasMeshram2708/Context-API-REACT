import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { NoteState } from "./context/notes/NoteState";
import Navbar from "./components/Navbar";
import Slams from "./pages/Slams";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/slams" element={<Slams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
};

export default App;
