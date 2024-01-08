import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import api_url from "./url";

export default function YourPosts() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchevent = async () => {

    const token = localStorage.getItem("authToken");

    let endpoint = "/get-event-user"
    try {
      const response = await fetch(api_url + endpoint, { method: 'GET' , headers: {
        'Bypass-Tunnel-Reminder': "anything",
        'authorization': token,    
    }  })
      
      if (!response.ok) {
        throw new Error("Network Error Couldnt fetch data")
      }

      const data = await response.json();

      setEvents(data);
    } catch (error) {
      
        if (error.name === 'AbortError') {
          console.error('Fetch aborted:', error);
          setError(error)
        } else
        {
          console.error('Error fetching data:', error);
          setError(error); // Set the error state
        }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchevent();
  }, []);

  return (
    <div>
      <h1>Your Posts</h1>
      
      <div className="">
          
      {loading ?
        (<div> <span className="home-bg" > Loading... </span> </div>)
        : error ? (
          <h1 className="home-bg">Error : {error.msg}</h1>
        ) : Array.isArray(events)
        ? (events.map((eventobj) => {
        return <EventCard key={eventobj._id} canEdit={true} eventobj={eventobj} />
      }))
        : (
          <div>
            <p>You Dont Have Any Events Yet</p>
            {/* You can provide additional error handling or fallback UI */}
          </div>
        )}

          
    </div>
    </div>
  )
}
