import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";
const EmployeesList = (props) => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem name="Roman Nadurak" />
      <EmployeesListItem name='John Smith' />
      <EmployeesListItem name='Sandra Bell' />
    </ul>
  );
};

export default EmployeesList;
