export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    // id: nextTodoId++,
    payload: { todo: todo }
  };
}

export const delTodo = (todo) => {
  return {
    type: 'DEL_TODO',
    payload: { todo: todo }
  };
}

export const changeTodo = (changetodo) => {
  return {
    type: 'CHANGE_TODO',
    payload: { changetodo: changetodo }
  };
}
