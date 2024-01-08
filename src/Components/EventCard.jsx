import { AddToCalendarButton } from 'add-to-calendar-button-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../App.css';
import api_url from './url';

export default function EventCard(props) {
  
  const { img, heading, description, place , startDate , startTime  , endTime,user,_id } = props.eventobj;
  const [inEdit, setInEdit] = useState(false);
  const UpdatedEvent = new FormData();
  const [inputs, setInputs] = useState({
    heading: heading,
    description:  description,
    place:  place,
    startDate: startDate ,
    startTime: startTime,
    endTime: endTime
  })

  const SubmitEvent = async () => {

    console.log(inputs);
    console.log(UpdatedEvent);
    const endPoint = "/update-event"
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await fetch(api_url + endPoint, {
        method: "POST",
        headers: {
          authorization: authToken,
          id: _id,
          updatedDetails: JSON.stringify(inputs),
        }
      })

      if (!response.ok) {
        console.log(response)
        throw new Error("Fetch request Error");
      } else {
        const data = await response.json();
        alert(data.message);

        if (data.message === "Updated The Event Successfully") {
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error);
      alert(error.message)
    }
    
  };

  const handleEdit = () => {
    setInEdit(!inEdit);
  }

  const handleDelete = async() => {

    const isConfirmed = window.confirm('Are you sure you want to delete this event?');

    if (isConfirmed) {
      let authToken = localStorage.getItem("authToken");

      let endpoint = "/delete"

      try {
        const response = await fetch(api_url + endpoint, {
        method: "DELETE",
        headers: {
          authorization: authToken,
          id: _id
        }
      });

        if (!response.ok) {
          throw new Error("Fetch Request Error");
        }else{
          const data = await response.json();

          alert(data.message);

          if (data.message === "Event deleted successfully") {
          window.location.reload();
        }
        }  
      } catch (error) {
        alert("We Got Some Error: " + error.message);
      }
      
    }
  }

  const handleChange = (field, e) => {
    const { name, value } = e.target;

    UpdatedEvent.set(name, value)
    setInputs((prevInp) => ({
      ...prevInp, [field]: e.target.value
    }));
    
  }
 


  return (
    <div>
        <div className=" e-card card mb-3 ">
            <div className="  row g-0">
                <div className="col-md-4">
                      <img src={img} className=" e-img img-fluid rounded-start" alt="Event-img" />
                </div>
                <div className="col-md-8">
            <div className="card-body">
              {inEdit ? (<>
                
                  <input className="card-text pixelfont form-control" name='heading' value={inputs.heading} onChange={(e) => handleChange('heading' , e)} />
                  <input className="card-text pixelfont form-control fw-normal" name='description' value={inputs.description} onChange={(e) => handleChange('description' , e)} />
                  <input className="card-text pixelfont form-control fw-light" name='place' value={inputs.place} onChange={(e) => handleChange('place' , e)} />
                  <input className="card-text pixelfont form-control" type='date' name='startDate' value={inputs.startDate} onChange={(e) => handleChange('startDate' , e)} />
                  <input className="card-text pixelfont form-control" type='time' name='startTime' value={inputs.startTime} onChange={(e) => handleChange('startTime' , e)} />
                  <input className="card-text pixelfont form-control" type='time' name='endTime' value={inputs.endTime} onChange={(e) => handleChange('endTime' , e)} />
                <div className="editwrapper my-2">
                <button className='btn text-center btn-primary' onClick={SubmitEvent} > Update Event </button>
                <button className='btn text-center btn-success' onClick={handleEdit}> Turn Off Edit </button>
                <button className='btn text-center btn-danger' onClick={handleDelete}> Delete Event </button>
                
                </div>  
              </>
              ) : (
                <>
                  <div className="editwrapper">
                    <h5 className="card-title pixelfont">{heading}</h5>
                      {props.canEdit ? <button className='btn btn-success' onClick={handleEdit} > Edit </button> : <></> }
                    </div>
                    <p className="card-text pixelfont fw-normal">{description}</p>
                          <h5 className="card-title pixelfont">By @<span className='text-primary'>{user}</span></h5>
                          <p className="card-text pixelfont fw-light">{place}</p>
                          <AddToCalendarButton
                              name={heading}
                                location={place}
                                description={description}
                              startDate={startDate}
                              startTime={startTime}
                              endTime={endTime}
                                options={['Apple','Google','Yahoo','iCal']}
                                timeZone="Europe/London"
                              buttonStyle='date'
                              hideBranding='true'
                              size='6|5|4'
                              trigger='click'
                          ></AddToCalendarButton>
                </>
              )}
              
                          
                          
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

EventCard.propTypes = {
    eventobj: PropTypes.shape({
        img: PropTypes.any.isRequired,
        heading: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        startDate: PropTypes.any.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        _id: PropTypes.any.isRequired
    }).isRequired,
  canEdit: PropTypes.bool.isRequired,
};
