import { Component } from "react";

import Filter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import Search from "../search/search";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Roman Nadurak",
          salary: 2500,
          // promotion: true,
          id: 1,
        },
        {
          name: "Yura Tkachuk",
          salary: 2000,
          // promotion: false,
          id: 2,
        },
        {
          name: "Ksenia Kermoshchuk",
          salary: 900,
          // promotion: true,
          id: 3,
        },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((value) => value.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search">
          <Search />
          <Filter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
