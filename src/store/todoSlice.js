import { createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todo: [
      {
        id: Math.random(),
        header: "Ninetails",
        text: "zapechatat",
        check: false,
        status: "current",
      },
      {
        id: new Date().toISOString(),
        header: "Pivo",
        text: "raspechatat",
        check: false,
        status: "deleted",
      },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.todo.push({
        id: new Date().toISOString(),
        header: action.payload.header,
        text: action.payload.text,
        check: false,
        status: "current",
      });
    },
    deleteTodo(state, action) {
      state.todo.map((obj, i) => {
        if (i === action.payload.index) {
          const newStatus = "deleted";
          obj.status = newStatus;
          return obj;
        }
        return obj;
      });
    },
    editTodo(state, action) {
      state.todo.map((obj, i) => {
        if (i === action.payload.index) {
          obj.header = action.payload.header;
          obj.text = action.payload.text;
          return obj;
        }
        return obj;
      });
    },
    sendCompleted(state) {
      state.todo.map((obj) => {
        if (obj.check === true) {
          obj.status = "completed";
          console.log(obj.status)
          return obj;
        }
        return obj;
      })},
    changeStatus(state, action) {
      state.todo.map((obj, i) => {
        if (i === action.payload.index) {
          obj.check = !obj.check
          return obj;
        }
        return obj;
      });
    },
    deleteForever(state){
      console.log("DASDA")
      state.todo = state.todo.filter(i => i.status !== "deleted")
    },
    backToCurrent(state,action){
      state.todo.map((obj, i) => {
        if (i === action.payload.index) {
          obj.status = "current"
          obj.check = false
          return obj;
        }
        return obj;
      });
    }
  }
 });

export const { addTodo, deleteTodo, editTodo, changeStatus, sendCompleted, deleteForever, backToCurrent } = todoSlice.actions;

export default todoSlice.reducer;
