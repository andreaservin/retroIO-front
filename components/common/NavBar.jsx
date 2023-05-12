import Image from 'next/image'
import Link from 'next/link'
import { Navbar, Container } from 'react-bootstrap'

const NavBar = ({ user, children }) => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light'>
      <Container>
        <Navbar.Brand href='/'>
          <Image
            src='/retro-name-logo.png'
            alt='retroIO Logo'
            width={100}
            height={40}
            priority
          />
        </Navbar.Brand>
        {children}
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <div className='d-flex w-100 justify-content-end align-items-center'>
            <Navbar.Text>{user?.email || 'user@email.com'}</Navbar.Text>
            <Link className='text-black ms-2' href='/login'>
              Logout
              <i className='bi bi-box-arrow-right ms-2'></i>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
