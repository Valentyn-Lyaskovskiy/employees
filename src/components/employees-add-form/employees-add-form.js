import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form action="" className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What is the name?"
            name="name"
            onChange={this.onValueChange}
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $ is..."
            name="salary"
            onChange={this.onValueChange}
            value={salary}
          />
          <button className="btn btn-outline-light" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
