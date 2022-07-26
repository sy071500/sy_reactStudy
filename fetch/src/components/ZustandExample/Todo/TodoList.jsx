import React from "react";
//import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
//import TodoItemCreator from "./TodoListCreator";
//import TodoListStats from './TodoListState';
import { useStore } from "./TodoStore";

export const TodoList = () => {
  const todoList = useStore((state) => state.filteredTodoListState());
  return (
    <div>
      <TodoListStats/>
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};
