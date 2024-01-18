import React, {useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { alertCustom } from '../../utils/alertCustom';
import axios from 'axios';
import Select from 'react-select';

const URL_BASE = import.meta.env.VITE_URL_BASE;


const ModalEditUser = ({user, setIsLoading, setChangeFlag}) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(user);


  const handleEdit = (user) => {
    setShowModalEdit(true);
  };

  const handleEditClose = (user) => {
    setShowModalEdit(false);
  };

  const handleSaveEdit = async() => {
    try {
      setIsLoading(true);
      await axios.patch(`${URL_BASE}/users/${selectedUser.id}`, selectedUser);
      setChangeFlag(prev => !prev);
    } catch (error) {
      alertCustom('Upps', 'Ha ocurrido un error.', 'error');
    } finally {
      handleEditClose();
      setIsLoading(false);
    }
  };
  

  const handleSelectChange = ({value}) => {
    console.log(value);
  }

  return (
    <>
      <Button variant='success' size='sm' className='mx-2' onClick={() => handleEdit(user)}>Editar</Button>
      <Modal show={showModalEdit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={selectedUser ? selectedUser.name : ''}
                onChange={(e) => {
                  setSelectedUser({
                    ...selectedUser,
                    name: e.target.value
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={selectedUser ? selectedUser.lastName : ''}
                onChange={(e) => {
                  setSelectedUser({
                    ...selectedUser,
                    lastName: e.target.value
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                value={selectedUser ? selectedUser.email : ''}
                onChange={(e) => {
                  setSelectedUser({
                    ...selectedUser,
                    email: e.target.value
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Rol (El rol puede ser unicamente "ADMIN" o "CLIENT")</Form.Label>
              <Form.Control
                type="text"
                value={selectedUser ? selectedUser.role : ''}
                onChange={(e) => {
                  setSelectedUser({
                    ...selectedUser,
                    role: e.target.value
                  })
                }}
              />
            </Form.Group>


            {/* <Form.Group className="mb-3" controlId="rol">
              <Form.Label>Rol</Form.Label>
              <Select 
                options={ user.map(option => ({label: option.role, value: option.role}))}
                onChange={handleSelectChange}
              />
              <Form.Select aria-label="Default select example" 
                defaultValue={{label: selectedUser.role}}
                onChange={(e) => {
                  setSelectedUser({
                    ...selectedUser,
                    role: e.target.value
                  })
                }}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="CLIENT">CLIENT</option>
              </Form.Select>
              <Form.Control
                type=""
                value={selectedUser ? selectedUser.email : ''}
                onChange={(e) => {
                  setSelectedUser({
                    ...selectedUser,
                    email: e.target.value
                  })
                }}
              />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleEditClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalEditUser