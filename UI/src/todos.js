import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={todo.id}>
                    <span>{todo.title}</span>
                    <span onClick={() => deleteTodo(todo.id)}>                         X</span>
                    
                </div>
            )
        })
    ) : (
        <p>No todo's left . Yayy mofo!</p>
    )
    
    
    return(
      <div className='todos collection'>
       {todoList}
      </div>
    )
}

export default Todos