import { useState } from "react";

export default function AddEventForm() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');

    const checkForm = () => {
        console.log(formData);
        // Add additional validation logic if needed
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        // Check if the selected date is before the current date
        if (name === 'eventStartDate' || name === 'eventStartTime') {
        const currentDateTime = new Date().toISOString().slice(0, 16);
        const selectedDateTime = new Date(`${formData.eventStartDate || ''}T${formData.eventStartTime || ''}:00`).toISOString().slice(0, 16);

        if (new Date(selectedDateTime) < new Date(currentDateTime)) {
            setError('Please select a date and time on or after the current date and time.');
        } else {
            setError('');
        }
    }
    }

    const handleCheckForm = () => {
        
        if (error) {
            console.log('Validation error:', error);
        } else {
            checkForm();
        }
    }

    return (
        <div>
            <form className="form-signup">
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
                    <input onChange={handleChange} type="text" name="location" className="form-control" id="exampleInput1" placeholder="Enter the place where the event will take place" title='Enter a valid Email' required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Event Date:</label>
                    <input
                        onChange={handleChange}
                        type="date"
                        className="form-control"
                        name="eventStartDate"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Event Time:</label>
                    <input
                        onChange={handleChange}
                        type="time"
                        className="form-control"
                        name="eventStartTime"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Event End Date:</label>
                    <input
                        onChange={handleChange}
                        type="date"
                        className="form-control"
                        name="eventEndDate"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Event End Time:</label>
                    <input
                        onChange={handleChange}
                        type="time"
                        className="form-control"
                        name="eventEndTime"
                        required
                    />
                </div>
                <div className="mb-3">
                    {error && <p className="text-danger">{error}</p>}
                    <button onClick={handleCheckForm} type="button" className="btn btn-primary" required>Check</button>
                </div>
            </form>
        </div>
    );
}
