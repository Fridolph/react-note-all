import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

function PriceList({ items, categories, onModifyItem, onDeleteItem }) {
  return (
    <ul className="list-group list-group-flush">
      {items.map((item, idx) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
          <span className="type-icon col-1 badge badge-primary">
            <Ionicon
              className="rounded-circle"
              fontSize="30px"
              style={{backbgroundColor: '#00fbff', padding: '5px'}}
              color={'#fff'}
              icon={item.category.iconName}
            />
          </span>
          <span className="title-name col-4">{item.title}</span>
          <span className="price col-2 font-weight-bold">{item.category.type === 'income' ? '+' : '-'}{item.price}元</span>
          <span className="date col-3">{item.date}</span>
          <span className="control-btn-group col-2">
            <a className="btn-modify" onClick={() => onModifyItem(item.id)}>
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{backgroundColor: '#28a745', padding: '5px'}}
                color={'#fff'}
                icon="ios-create-outline"
              />
            </a>
            <a className="btn-delete" style={{marginLeft: '10px'}} onClick={() => onDeleteItem(item.id)}>
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{backgroundColor: '#dc3545', padding: '5px'}}
                color={'#fff'}
                icon="ios-close"
              />
            </a>
          </span>
        </li>
      ))}
    </ul>
  )
}

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}

export default PriceList
