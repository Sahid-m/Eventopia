import PropTypes from 'prop-types';
import { useState } from "react";

const ToggleButton = (props) => {


    ToggleButton.propTypes = {
        allEvents: PropTypes.func.isRequired,
        currentEvents: PropTypes.func.isRequired,
    }

  const [buttons, setButtons] = useState([
    { id: 1, label: 'All Events', isSelected: false },
    { id: 2, label: 'Current Events', isSelected: true   },
    // Add more buttons as needed
  ]);

  const toggleButton = (buttonId) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) => ({
        ...button,
        isSelected: button.id === buttonId ? !button.isSelected : false,
      }))
    );
  };

  const handleButtonClick = (buttonId) => {
    const button = buttons.find((b) => b.id === buttonId);

    if (button) {
      toggleButton(buttonId);

     
    if (buttonId == 1) {
        props.allEvents();
    }
    if (buttonId == 2) {
        props.currentEvents();
    }
        
        
    }
  };

  return (
      <div className="filters">
          <div className="">Filters: </div>
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`e-filter ${button.isSelected ? 'selected' : ''}`}
          onClick={() => handleButtonClick(button.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
