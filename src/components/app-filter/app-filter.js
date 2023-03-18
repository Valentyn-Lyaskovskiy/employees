import './app-filter.css'

const Filter = () => {
  return (
    <div className="btn-group">
      <button
        className="btn btn-light"
        type='button'>
        All Employees
      </button>
      <button
        className="btn btn-outline-light"
        type='button'>
        Promotion
      </button>
      <button
        className="btn btn-outline-light"
        type='button'>
        Salary $1k +
      </button>
    </div>
  )
};

export default Filter;