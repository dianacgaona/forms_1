import React, { Component } from "react";
import countries from "./countries.js";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "1960-01-01",
      country: "",
      diet: "",
      explorer_reason: "",
      formCompleted: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  countryOfOrigin = () => {
    return countries.map(country => {
      return <option key={country.code}>{country.name}</option>;
    });
  };

  dietaryPreference = () => {
    let { diet } = this.state;
    return (
      <div>
        <select onChange={this.handleChange} name="diet" value={diet} size="3">
          <option>Omnivore</option>
          <option>Vegetarian</option>
          <option>Vegan</option>
        </select>
      </div>
    );
  };

  render() {
    const { name, date, explorer_reason, country } = this.state;
    console.log(this.state);
    return (
      <React.Fragment>
        <h1>Mars Mission Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">What is your name?</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            value={name}
          />{" "}
          <br />
          <label htmlFor="date" for="start">
            What is your date of birth?
          </label>
          <input
            onChange={this.handleChange}
            type="date"
            id="start"
            name="date"
            value={date}
            min="1960-01-01"
            max="2019-12-31"
          />
          <br />
          <label htmlFor="country">What is your country of origin?</label>
          <select onChange={this.handleChange} value={country} name="country">
            {this.countryOfOrigin()}
          </select>
          <br />
          <label htmlFor="diet">What is your dietary preference?</label>
          {this.dietaryPreference()} <br />
          <label htmlFor="explorer_reason">
            Why do you want to be a Mars explorer?
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="explorer_reason"
            id="explorer_reason"
            value={explorer_reason}
          />
          <input type="submit" value="Save" />
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
