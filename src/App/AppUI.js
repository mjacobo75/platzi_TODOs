import React from 'react'
import { TodoCounter }from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodosLoading } from '../TodosLoading';

const AppUI = () => {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
        <TodoCounter />
        <TodoSearch />    
        <TodoList>
            { error && <TodosError error={error} /> }
            { loading && <TodosLoading /> }
            { (!loading && !searchedTodos.length) && <EmptyTodos /> }

            { searchedTodos.map((todo, item) => (
                <TodoItem 
                    key={item} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

      <CreateTodoButtom 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export {AppUI};