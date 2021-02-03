import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../Actions";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.fetchWeather(term);
    setTerm("");
  };

  const renderButtons = () => {
    if (!props.spinner) {
      return (
        <button
          type="submit"
          className="btn btn-outline-secondary"
          disabled={!term}
        >
          Submit
        </button>
      );
    }
    return (
      <button className="btn btn-secondary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    );
  };

  const api_error = props.api_error ? "is-invalid" : "";

  return (
    <form className="input-group" onSubmit={handleSubmit}>
      <input
        placeholder="Get a five-day forecast in your favourite cities"
        className={`form-control ${api_error}`}
        value={term}
        id="validationServer03"
        aria-describedby="validationServer03Feedback"
        onChange={onInputChange}
        autoComplete="off"
      />
      <span className="input-group-btn">{renderButtons()}</span>
      <div id="validationServer03Feedback" className="invalid-feedback">
        Please provide a valid city.
      </div>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    spinner: state.spinnerStatus.spinner,
    api_error: state.spinnerStatus.api_error,
  };
};

export default connect(mapStateToProps, { fetchWeather })(SearchBar);
