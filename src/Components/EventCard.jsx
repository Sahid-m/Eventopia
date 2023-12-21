import PropTypes from 'prop-types';
import '../App.css';

export default function EventCard(props) {

    const { img, heading, description, dandt, place } = props.eventobj;

  return (
    <div>
        <div className=" e-card card mb-3 ">
            <div className="  row g-0">
                <div className="col-md-4">
                      <img src={img} className=" e-img img-fluid rounded-start" alt="Event-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title pixelfont">{heading}</h5>
                        <p className="card-text pixelfont fw-normal">{description}</p>
                          <p className="card-text pixelfont fw-light">{dandt}</p>
                          <p className="card-text pixelfont fw-light">{place}</p>
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
        dandt: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired
    }).isRequired,
};
