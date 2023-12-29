import AddEventForm from "./AddEventForm";

export default function AddPostsModal() {

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
              <AddEventForm />
            </div>
            <div className="modal-footer md-footer">
              <button type="button" className="btn btn-secondary w-30" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary w-30 ">Sumbit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
