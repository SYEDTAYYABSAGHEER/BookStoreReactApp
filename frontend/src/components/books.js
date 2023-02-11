import React from 'react'

function Books(props) {
  return (
    <div>
      <h1>List of the books</h1>
      {props.books.map((book) => {
        return(
            <div key={book.id}>
                <h1>{book.title}</h1>
                <p>{book.body}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Books