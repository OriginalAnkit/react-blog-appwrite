import { Link } from "react-router-dom"
export default function Navigation() {
  return <nav className="navbar">
      <Link to="/" className="nav-brand">MyApp</Link>
      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
    </nav>
  
}