// import NewsletterEditor from "./components/NewsletterEditor";

// function App() {
//   return (
//     <div>
//       <NewsletterEditor />
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:key?" element={<Editor />} />
      </Routes>
    </Router>
  );
}
