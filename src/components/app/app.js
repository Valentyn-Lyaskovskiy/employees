import Filter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import Search from "../search/search";
import EmployeesList from "../employees-list/employees-list";
import "./app.css";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {
  const data = [
    {
      name: "Roman Nadurak",
      salary: 2500,
      promotion: true,
      id: 1,
    },
    {
      name: "Yura Tkachuk",
      salary: 2000,
      promotion: false,
      id: 2,
    },
    {
      name: "Ksenia Kermoshchuk",
      salary: 900,
      promotion: true,
      id: 3,
    },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search">
        <Search />
        <Filter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
