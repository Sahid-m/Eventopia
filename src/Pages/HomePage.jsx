import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="home-bg">
        <h1 className="home-head fs-1">Hey wanna know about all the events going in University?</h1>
        <Link to="/events" className="home-btn btn fs-4 px-6">Events</Link>
      </div>
  )
}
