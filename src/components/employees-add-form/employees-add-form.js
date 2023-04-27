import "./employees-add-form.css";

const EmployeesAddForm = () => {

  return (
    <div className="app-add-form">
      <h3>Add a new employee</h3>
      <form action="" className="add-form d-flex">
        <input type="text"
          className="form-control new-post-label"
          placeholder="What is the name?" />
        <input type="number"
          className="form-control new-post-label"
          placeholder="Salary in $ is..." />
        <button className="btn btn-outline-light"
          type='submit'>Add
        </button>
      </form>
    </div>
  )
}

export default EmployeesAddForm;