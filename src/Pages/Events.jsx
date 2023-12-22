
import { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";


export default function Events() {

  const [events, setEvents] = useState([]);

  const fetchevent = async () => {
    try {
      const response = await fetch('http://192.168.216.165:8080/get-events', { method: 'GET' })
      
      if (!response.ok) {
        throw new Error("Network Error Couldnt fetch request")
      }

      const data = await response.json();

      setEvents(data);
    } catch (e) {
      console.error(e);
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
          
      {events.map((eventobj) => {
        console.log(eventobj);
        return <EventCard key={eventobj._id} eventobj={eventobj} />
      })}

          
    </div>
  )
}
