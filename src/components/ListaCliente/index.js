import React, { Component } from 'react';
import {Table, Spinner} from 'react-bootstrap'
import {URL_CUSTOMERS_LIST, URL_CUSTOMER_KPI} from '../../constants/api_url'
import KpiCliente from './KpiCliente'

class ListaCliente extends Component {
  
  constructor(props) {
    super(props);

    const { showDeathDate } = props;

    this.state = {
      customers: null,
      customersKpi: null,
      showDeathDate: showDeathDate ? showDeathDate : false
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.loadCustomerList()
    this.loadCustomerKpi()
  }

  loadCustomerList = () => {
    fetch(URL_CUSTOMERS_LIST).then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          this.setState({
            customers: data 
          })
        });
      }
    }).catch( () => {
      console.error('Ocurrió un error');
    })
  }

  loadCustomerKpi = () => {
    fetch(URL_CUSTOMER_KPI).then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          this.setState({
            customersKpi: data 
          })
        });
      }
    }).catch( () => {
      console.error('Ocurrió un error');
    })
  }

  buildTableRows = () => {
    const { customers, showDeathDate } = this.state;
    const rows = customers.map( customer => (
        <tr key={`tr-${customer.customerId}`}>
          <td>{customer.customerId}</td>
          <td>{customer.name}</td>
          <td>{customer.lastname}</td>
          <td>{customer.age}</td>
          <td>{customer.birthday}</td>
          {showDeathDate && <td>{customer.deathDate}</td> }
        </tr>
      )
    )
    return rows;
  }

  render() {
    const { customers, customersKpi, showDeathDate } = this.state;
    return (
      <div>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Edad</td>
                    <td>Fecha de Nacimiento</td>
                    {showDeathDate && <td>Fecha Probable de Muerte</td> }
                </tr>
            </thead>
            <tbody>
                {(customers && customersKpi) ? this.buildTableRows() : <Spinner animation="border" />}
            </tbody>
        </Table>
        {customersKpi && <KpiCliente kpi={customersKpi}></KpiCliente>}
      </div>
    );
  }
}

export default ListaCliente;
