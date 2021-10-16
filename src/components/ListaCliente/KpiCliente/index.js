import React from 'react'

const KpiCliente = ( {kpi} ) => {

  return (
    <div>
      <div>
        <label>Promedio de Edades: </label>
        <input type="text" value={kpi.edad_promedio} disabled />
      </div>
      <div>
        <label>Desviación estándar de Edades: </label>
        <input type="text" value={kpi.desviacion_estandar} disabled />
      </div>
    </div>
  )

}
export default KpiCliente