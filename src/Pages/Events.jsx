
import { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";


export default function Events() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchevent = async () => {


    try {
      const response = await fetch('http://localhost:8080/get-events', { method: 'GET' , headers: {
    'Bypass-Tunnel-Reminder': "anything" 
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

    // const eventdetails = {
    //     img: 'https://placehold.co/1280x720',
    //     heading: "Sample Heading",
    //     description: "Sample Desc",
    //     dandt: "Date and Time",
    //   place: "Place",
    //   startDate: '2023-12-22',
    //   startTime: '10:00',
    //   endDate: '2023-12-22',
    //     endTime: '12:00'
    // }

  return (
    <div className="pagemargin e-bg">
          
      {loading ?
        (<div> <span className="home-bg" > Loading... </span> </div>)
        : error ? (
          <h1 className="home-bg">Error : {error.msg}</h1>
        ) : (events.map((eventobj) => {
        console.log(eventobj);
        return <EventCard key={eventobj._id} eventobj={eventobj} />
      }))}

          
    </div>
  )
}
