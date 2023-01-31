/** @format */

import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/selectors";
// import { VISIBILITY_FILTERS } from "../constants";

const TodoList = ({ todos }) => {
  // convert string to valid object
  const parsedObj = JSON.parse(localStorage.getItem("John") || []);

  console.log(parsedObj + "is here");

  return (
    <ul className='todo-list'>
      {parsedObj && parsedObj.length ? (
        parsedObj.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      ) : (
        <h1>No todos, yay!</h1>
      )}
    </ul>
  );
};

// const MyTodo = () => {

//   console.log(parsedObj);
//   return <div></div>;
// };

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);

  const jsonObj = JSON.stringify(todos);

  // save to localStorage
  localStorage.setItem("John", jsonObj);

  return { todos };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
