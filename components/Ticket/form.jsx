import { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import useGet from '../../hooks/useGet'

const DEFAULT_VALUE = {
  description: '',
  type: '',
}

const TicketForm = ({ show, data, onSave, onCancel }) => {
  const { data: types, loading: loadingTypes, error: errorTypes, execute: getTypes } = useGet('/types')
  const [ticket, setTicket] = useState(data ?? DEFAULT_VALUE)

  const handleSave = () => {
    onSave(ticket)
    onCancel()
    setTicket(DEFAULT_VALUE)
  }

  const handleCancel = () => {
    onCancel()
    setTicket(data ?? DEFAULT_VALUE)
  }

  useEffect(() => {
    getTypes()
  }, [])

  return (
    <Modal show={show} onHide={onCancel} backdrop='static'>
      <Modal.Header closeButton>New Card</Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              value={ticket.description}
              onChange={(e) =>
                setTicket({ ...ticket, description: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicType'>
            <Form.Label>Type</Form.Label>
            <Form.Select
              onChange={(e) => setTicket({ ...ticket, type: e.target.value })}
              defaultValue={ticket?.type._id}
            >
              {types?.map(({ _id, name }, index) => (
                <option key={index} value={_id}>
                  {name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={handleSave}>
          Save
        </Button>
        <Button variant='secondary' onClick={handleCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TicketForm
