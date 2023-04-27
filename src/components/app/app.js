import Filter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import Search from "../search/search";
import EmployeesList from "../employees-list/employees-list";
import "./app.css";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search">
        <Search />
        <Filter />
      </div>

      <EmployeesList />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
