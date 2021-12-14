import { useState } from "react";
import { toast } from "react-toastify";
import "../index.css";

//Data from App component
export default function Form({ submitSearch }) {
  //State to save the changes from the input
  const [location, setLocation] = useState('');

  //Function to send the text from the input
  const onSubmit = (e) => {
    //In case there is no information, return, and do an alert from React-toastify
    e.preventDefault();
    if (!location || location === "") {
      toast.warning("You must fill the field!");
      return;
    }
    //return the text from the input
    submitSearch(location);
  };

  return (
    <form className="form d-flex align-items-center justify-content-center my-4">
      <input
        type="text"
        placeholder="Search for location"
        className="form-input pe-md-5"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={onSubmit} className="form-button fas fa-search"></button>
    </form>
  );
}
