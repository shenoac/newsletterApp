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
import { AuthProvider } from "./AuthContext";
import Login from "./pages/Login";
import RequireAuth from "./RequireAuth";
import CreateUser from "./pages/CreateUser";
import ChangePassword from "./pages/ChangePassword";

export default function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/editor/:key?" element={<Editor />} />
    //   </Routes>
    // </Router>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/create-user"
            element={
              <RequireAuth>
                <CreateUser />
              </RequireAuth>
            }
          />
          <Route
            path="/"
            element={
              <RequireAuth>
                {" "}
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/editor/:key?"
            element={
              <RequireAuth>
                <Editor />
              </RequireAuth>
            }
          />
          <Route
            path="/change-password"
            element={
              <RequireAuth>
                <ChangePassword />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
