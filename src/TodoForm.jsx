import { IoAddOutline } from "react-icons/io5";
import { PropTypes } from 'prop-types';
export default function TodoForm({ handleChange, handleFormSubmit, value }) {
  return (
    <>
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <input
          className="todo-input"
          onChange={handleChange}
          name="task"
          placeholder="Add todo..."
          value={value}
        />
        <button className="todo-btn" type="submit">
          <IoAddOutline size="1.5em" color="#333" />
        </button>
      </form>
    </>
  );
}

TodoForm.propTypes = {
  handleChange: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  value: PropTypes.string
};
