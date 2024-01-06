
import { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import ToggleButton from "../Components/FilteredButtons";
import api_url from "../Components/url";


export default function Events() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);


  const fetchevent = async () => {

    const endpoint = "/get-events"
    
    try {
      const response = await fetch(api_url + endpoint, { method: 'GET' , headers: {
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
  
  const today = new Date().toISOString().split('T')[0];
  
  const getFilteredEvents = () => {
  if (events.length === 0) {
    return [];
  }

  // Filter events with startDate after today
     let data = events.filter((event) => {
       const eventStartDate = new Date(event.startDate).toISOString().split('T')[0];
       return eventStartDate > today;
     }
     );

     setFilteredEvents(data);
  };

  const getAllEvents = () => {
    if (events.length === 0) {
    return [];
    }
    
    setFilteredEvents(events);
  }



  useEffect(() => {
    getFilteredEvents();
  },[events])

    // const eventdetails = {
    //     img: 'https://placehold.co/1280x720',
    //     heading: "Sample Heading",
    //     description: "Sample Desc",
    //     place: "Place",
    //     startDate: '2023-12-22',
    //     startTime: '10:00',
    //     endTime: '12:00'
    // }

  return (
    <div className="pagemargin e-bg">
          
      {loading ?
        (<div> <span className="home-bg" > Loading... </span> </div>)
        : error ? (
          <h1 className="home-bg">Error : {error.msg}</h1>
        ) : (
            <div className="">
              
                
                <ToggleButton allEvents={getAllEvents} currentEvents={getFilteredEvents}   />
              
              {filteredEvents.map((eventobj) => {
                  return <EventCard key={eventobj._id} eventobj={eventobj} />
              })}
          </div>)}

          
    </div>
  )
}
