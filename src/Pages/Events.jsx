import EventCard from "../Components/EventCard";


export default function Events() {

    const eventdetails = {
        img: 'https://placehold.co/1280x720',
        heading: "Sample Heading",
        description: "Sample Desc",
        dandt: "Date and Time",
        place: "Place "
    }

  return (
    <div className="pagemargin e-bg">
          
          <EventCard eventobj={eventdetails} />
          <EventCard eventobj={eventdetails} />
          <EventCard eventobj={eventdetails} />
          
    </div>
  )
}
