import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'

const KpiCliente = ( {kpi} ) => {

  return (
    <div className="kpi-container">
      <Form>
        <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="5">Promedio de Edades: </Form.Label>
              <Col sm="7">
                <Form.Control type="text" value={kpi.edad_promedio} readOnly />
              </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="5">Desviación estándar de Edades: </Form.Label>
              <Col sm="7">
                <Form.Control type="text" value={kpi.desviacion_estandar} readOnly />
              </Col>
        </Form.Group>
      </Form>
    </div>
  )

}
export default KpiCliente