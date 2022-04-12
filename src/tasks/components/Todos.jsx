import React from 'react';
import { Provider } from "react-redux";
import store from "../../storeTask";
import TodoList from './TodoList';

import '../styles/todos.scss'

const Todos = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default Todos;
