import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

const TrelloCard = ({text, title, id, index}) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card py-3 my-1 shadow p-2 mb-5 bg-white rounded">
            <p className="px-3">
              <strong>Company:</strong> {text}
            </p>
            <p className="small px-3">
              <strong>Job Title:</strong> {title}
            </p>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default TrelloCard
