import Link from "next/link";
import Register from "./Register/page";
import "./Home.css"; // Import the CSS file for styling
// import Homes from "./Homes/page"

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Event Registration</h1>
      
      {/* Show the registration form */}
      <Register />
      
      {/* Link to the Registrations UI page */}
      <div className="home-button-container">
        <Link href="/Registration">
          <button className="home-button">View Registrations</button>
        </Link>
      </div>
    </div>
  );
}