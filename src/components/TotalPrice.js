import React from 'react'
import PropTypes from 'prop-types'

function TotalPrice({income, outcome}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <h4 className="col" style={{textAlign: 'center', margin: '30px 0'}}>
          收入：{income}
        </h4>
        <h4 className="col" style={{textAlign: 'center', margin: '30px 0'}}>
          支出：{outcome}
        </h4>
      </div>
    </div>
  )
}

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired,
}

export default TotalPrice
