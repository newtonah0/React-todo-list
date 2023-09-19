import TodoItem from "./TodoItem";
import { PropTypes } from "prop-types";

export default function TodoList({ todoItems, deleteItem, editItem }) {
  return (
    <div className="todolist">
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            handelClick={deleteItem}
            handleOnBlur={editItem}
          />
        );
      })}
    </div>
  );
}

TodoList.propTypes = {
  todoItems: PropTypes.array,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func,
};