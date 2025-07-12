import { Link } from "react-router-dom";
import { singUp } from "./config/app.service";

export default function Signup() {
  const handleEvent = (e:any) => {
    e.preventDefault()
    
    const formData = new FormData(e.target);
    const data:any = {
      email: formData.get('email'),
      password: formData.get('password')
    };
    
    console.log('Form data:', data);
    if(data.email &&data.password){
      singUp(data.email, data.password).then(async (res) => {
        if(res.$id){
         
        }
      })
    }

  }

  return (
    <div className="page">
      <h1>Sign Up</h1>
      <form onSubmit={(e) => handleEvent(e)}>
       
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" name="password" required />
        </div>
       
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}