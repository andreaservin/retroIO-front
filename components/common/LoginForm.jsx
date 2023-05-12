import { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

const LoginForm = ({ onSubmit }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    onSubmit(user)
  }

  return (
    <Container className='d-flex justify-content-center mt-5'>
      <Card style={{ width: '30rem', padding: '20px' }} border='light'>
        <div className='d-flex justify-content-center'>
          <h2>LOGIN PAGE</h2>
        </div>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>
          <Button variant='primary' onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  )
}
export default LoginForm
