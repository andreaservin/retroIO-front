import { useState } from "react"
import Form from './form'

const Ticket = ({ bg, data, onUpdate, onLike }) => {
  const [showForm, setShowForm] = useState(false)
  const style = {
    backgroundColor: bg,
    color: '#ffff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }

  const button = {
    height: '30px',
    cursor: 'pointer',
    color: '#000',
    padding: '2px',
  }

  const handleLike = () => {
    onUpdate({ ...data, likes: data.likes + 1 })
  }

  const handleUpdate = (ticket) => {
    onUpdate(ticket)
  }

  return (
    <div style={style}>
      <div className='d-flex justify-content-between'>
        <p>{data?.description}</p>
        <i
          style={button}
          className='bi bi-pencil-fill'
          onClick={() => setShowForm(true)}
        ></i>
      </div>
      <Form
        show={showForm}
        data={data}
        onSave={handleUpdate}
        onCancel={() => setShowForm(false)}
      />
      <div className='d-flex justify-content-end'>
        <i
          style={button}
          className='bi bi-hand-thumbs-up pe-1'
          onClick={handleLike}
        >
          {data?.likes}
        </i>

        <i style={button} className='bi bi-chat-right-dots ps-1'>
          {data?.comments.length}
        </i>
      </div>
    </div>
  )
}

export default Ticket
