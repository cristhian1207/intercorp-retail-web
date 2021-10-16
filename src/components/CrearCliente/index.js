import React, { Component } from 'react';
import {Form, Button, Spinner} from 'react-bootstrap'
import {URL_CUSTOMER_POST} from '../../constants/api_url'

class CrearCliente extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      showLoader: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const lastname = form.lastname.value;
    const birthday = form.birthday.value;

    this.setState({
      showLoader: true 
    })

    const body = {
      name,
      lastname,
      birthday
    }

    const postParams = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }

    fetch(URL_CUSTOMER_POST, postParams).then(response => {
      if (response.status === 201) {
        this.props.updateList();
        this.props.updateKpi();
        alert('Cliente registrado')
      } else {
        alert('Error al registrar')
      }
      this.setState({
        showLoader: false 
      })
    }).catch( () => {
      console.error('Ocurrió un error');
      alert('Error al registrar')
      this.setState({
        showLoader: false 
      })
    })
  }

  render() {
    const { showLoader } = this.state;
    return (
      <div className="customerForm">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="customerName">
            <Form.Label>Nombre: </Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" name="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="customerLastname">
            <Form.Label>Apellido: </Form.Label>
            <Form.Control type="text" placeholder="Ingrese su apellido" name="lastname"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="customerBirthday">
            <Form.Label>Apellido: </Form.Label>
            <Form.Control type="date" name="birthday"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrar
          </Button>
        </Form>
        {showLoader && <Spinner animation="border" />}
      </div>
    );
  }
}

export default CrearCliente;
