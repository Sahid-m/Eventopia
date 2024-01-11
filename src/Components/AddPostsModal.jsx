import { useHref } from "react-router-dom";
import AddEventForm from "./AddEventForm";
import api_url from "./url";

export default function AddPostsModal() {

  const formData = new FormData();
  const href = useHref("/admin")
  
  const Submit = async (event) => {
    event.preventDefault();

    console.log(formData)
    let token = localStorage.getItem("authToken");
    if (!token) {
      alert("Youre Not Logged in Please Login");
    }

    let endpoint = "/add-event";

    try {
      const response = await fetch(api_url + endpoint, {
        method: 'POST',
        headers: {
          'authorization': token,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Fetch request Error");
      } else {
        const data = await response.json();
        alert(data.message);

        if (data.message === "Successfully Saved Event") {
          window.location.href = href;
        }
      }


    } catch (error) {
      alert(error.message)
    }
    
  }

  const updateEvent = (name,value) => {
    formData.set(name,value);
  }

  return (
    <div>
      <div className=" modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Event</h1>
            
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <AddEventForm updateFormData={updateEvent} />
            </div>
            <div className="modal-footer md-footer">
              <button type="button" className="btn btn-secondary w-30" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={Submit} className="btn btn-primary w-30 ">Sumbit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
