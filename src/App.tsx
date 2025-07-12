import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navigation from "./Navigation"
import Blogs from "./Blogs"
import Login from "./Logins"
import Signup from "./Signup"
import Verfiy from "./Verify"

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/verify" element={<Verfiy />} />

          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App