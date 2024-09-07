import React from 'react'

export default function TODOHero({todos_completed, total_todos}) {
  return (
    <section className='todohero_section'>
        <div>
            <p>Task Status</p>
        </div>
        <div className='todo-status'>
            {todos_completed}/{total_todos}
        </div>
    </section>
  )
}
