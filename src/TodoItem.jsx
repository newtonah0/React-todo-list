import { IoCloseOutline } from "react-icons/io5";
import { PropTypes } from "prop-types";
export default function TodoItem({ item, handelClick, handleOnBlur }) {
  function deleteThisItem() {
    handelClick(item.id);
  }

  function editThisItem(e) {
    handleOnBlur(item.id, e.target.innerText);
  }

  return (
    <div className="todo-item" key={item.id}>
      <input type="checkbox" className="todo-checkbox" />
      <div
        className="todo-item-text"
        contentEditable={true}
        onBlur={editThisItem}
      >
        {item.title}
      </div>
      <a className="todo-item-delete-btn" onClick={deleteThisItem}>
        <IoCloseOutline size="1.5em" color="#333" />
      </a>
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object,
  handelClick: PropTypes.func,
  handleOnBlur: PropTypes.func,
};