import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bonus: false,
      promotion: false,
    };
  }

  promote = () => {
    this.setState(({ promotion }) => ({
      promotion: !promotion,
    }));
  };

  getBonus = () => {
    this.setState(({ bonus }) => ({
      bonus: !bonus,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { bonus, promotion } = this.state;

    let classNames = "list-group-item d-flex justify-content-between";
    if (bonus) {
      classNames += " increase";
    }
    if (promotion) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.promote}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={"$" + salary}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-cookie btn-sm"
            type="button"
            onClick={this.getBonus}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
