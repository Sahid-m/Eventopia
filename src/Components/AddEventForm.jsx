import PropTypes from 'prop-types';
import { useState } from 'react';
import SelctImage from './SelctImage';
// import { useEffect } from "react";

export default function AddEventForm({ updateFormData }) {

    const [imageURL, setImageURL] = useState(true)
    const [imageURLvalue, setImageURLvalue] = useState("");

    AddEventForm.propTypes = {
        updateFormData: PropTypes.func,
    }

    const handleChange = (e) => {
        const { name , value } = e.target;
        updateFormData(name,value);
    }

    const handleImageChange = (e) => {
        setImageURLvalue(e.target.value);
        console.log("Image Changed")
        const { name } = e.target;
        updateFormData(name,imageURLvalue)
    }

    const handleImageURL = () => {
        setImageURL(!imageURL)
    }

    const setInputImage = (url) => {
        setImageURLvalue(url);
        handleImageChange({ target: { value: url , name: "img" } })
    }
    
    

    return (
        <div>
            <form className="form-signup1">
                <div className="mb-3">
                    <label className="form-label">Heading :</label>
                    <input onChange={handleChange} type="text" placeholder="Enter Heading" className="form-control" name="heading" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <textarea style={{ height: '150px', width: '100%' }} onChange={handleChange} type="text" placeholder="Describe Your Event" className="form-control" name="description" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location:</label>
                    <input onChange={handleChange} type="text" name="place" className="form-control" id="exampleInput1" placeholder="Enter the place where the event will take place" title='Enter a valid Email' required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Event Date:</label>
                    <input
                        onChange={handleChange}
                        type="date"
                        className="form-control"
                        name="startDate"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Start Time:</label>
                    <input
                        onChange={handleChange}
                        type="time"
                        className="form-control"
                        name="startTime"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">End Time:</label>
                    <input
                        onChange={handleChange}
                        type="time"
                        className="form-control"
                        name="endTime"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image URL: </label>
                    <input
                        onChange={handleImageChange}
                        type="text"
                        className="form-control"
                        name="img"
                        value={imageURLvalue}
                        required
                        disabled={imageURL}
                    />
                </div>
                {imageURL ? <div className="mb-3">
                                        <button className='btn btn-primary form-control'type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" > Add Image </button>
                                        <SelctImage updateImgeFnc={setInputImage} />
                           </div>
                    :
                <></>
                }
                
                <div className="mb-3">
                        <label htmlFor="" className="form-label"> Set Custom Image URL: 
                        </label>
                    <input
                        className=''
                        type="checkbox"
                        checked={!imageURL}
                        onChange={handleImageURL}
                    />
                    </div>
            </form>
        </div>
    );
}
