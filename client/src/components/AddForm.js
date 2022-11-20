import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/bookSlice";
const Addform = () => {
  const [formErrors, setFormErrors] = useState([]);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    description: "",
  });
  const handleInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(inputs);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.title === "") {
      setFormErrors((prev) => [...prev, "title is required"]);
    }
    if (inputs.price === "") {
      setFormErrors((prev) => [...prev, "price is required"]);
    }
    if (inputs.description === "") {
      setFormErrors((prev) => [...prev, "description is required"]);
    } else {
      dispatch(addBook(inputs));
      setInputs({
        title: "",
        price: "",
        description: "",
      });
      setFormErrors([]);
    }
  };
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>

            <input
              type="text"
              className="form-control"
              id="title"
              onChange={handleInputs}
              value={inputs.title}
            />
            {formErrors[0] ? (
              <span style={{ color: "red" }}>{formErrors[0]}</span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              onChange={handleInputs}
              value={inputs.price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              onChange={handleInputs}
              value={inputs.description}
            ></textarea>
            {formErrors[0] ? (
              <span style={{ color: "red" }}>{formErrors[2]}</span>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
