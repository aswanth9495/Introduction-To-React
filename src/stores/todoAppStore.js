export const ADD_TODO_ITEM = 'todo/main-app/ADD_TODO_ITEM';
export const SHOW_TODO_ITEM = 'todo/main-app/SHOW_TODO_ITEM';
export const DELETE_TODO_ITEM = 'todo/main-app/DELETE_TODO_ITEM';
// export const EDIT_TODO_ITEM = 'todo/main-app/EDIT_TODO_ITEM';
export function addTodoItem({ text }) {
  console.log("Yoo")
  return {
    type: ADD_TODO_ITEM,
    payload: text,
  }
}
function reducer(state = {
  todoList: [
    { id: 0, text: "Buy milk"},
    { id: 1, text: "Buy grocery"},
  ]
},action) {
  switch(action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { 
            id: state.todoList[state.todoList.length - 1].id + 1,
            text: action.payload,
          }
        ]
      }
    default:
      return state;
  }
}

export default reducer;
