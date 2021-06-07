import React, { Component } from "react";

import Joi from "joi-browser";
import cityService from "../services/cityService";

class AddCity extends Component {
  state = {
    data: { city_name: "", description: "" },
    errors: [],
    cities: [],
  };

  schema = Joi.object({
    city_name: Joi.string().required(),
    description: Joi.string().required(),
  });

  validateInput = (data) => {
    const result = Joi.validate(data, this.schema);
    const errors = {};
    if (!result.error) return {};

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    // sync the state with the form
    const { data } = this.state;
    data[input.name] = input.value;
    this.setState({ data });

    const errors = this.validateInput(data);
    this.setState({ errors });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validateInput(this.state.data);
    if (!(errors && Object.keys(errors).length === 0)) {
      return alert("Please Resolve Errors in Form");
    }

    try {
      const { data: city } = await cityService.createCity(data);
      alert("City has been Posted...");
      this.setState({ cities: [city, ...this.state.cities] });
    } catch (ex) {
      if (ex && ex.response.status === 400) {
        const { errors } = this.state;
        errors.email = ex.response.data;
        this.setState({ errors });
        alert(ex.response.data);
      }
    }
  };

  async componentDidMount() {
    const { data: cities } = await cityService.getAllCities();
    this.setState({ cities });
  }

  render() {
    const { data, errors, cities } = this.state;
    return (
      <React.Fragment>
        <form className="bgBlue center" onSubmit={this.handleSubmit}>
          <div className="bgBlack createPostContainer">
            <h2 className="fgWhite">Add City</h2>
            <label htmlFor="city_name">City Name</label>
            <input
              type="text"
              name="city_name"
              id="city_name"
              placeholder="City"
              value={data.city_name}
              onChange={this.handleChange}
            />
            <span className="validationError">
              {data.title && errors.title}
            </span>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              placeholder="Description Here!"
              value={data.description}
              onChange={this.handleChange}
            />
            <span className="validationError">
              {data.description && errors.description}
            </span>
            <button className="bgRed fgWhite">Publish City</button>
          </div>
        </form>
        <div>
          {cities.map((city) => {
            return (
              <div key={city._id}>
                <h3>{city.city_name}</h3>
                <p>{city.description}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default AddCity;
