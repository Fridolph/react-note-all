import React from 'react'
import Ionicon from 'react-ionicons'
import { LIST_VIEW, CHART_VIEW } from '../../constants'

function generateLinkClass(current, view) {
  return (current === view) ? 'nav-link active' : 'nav-link'
}

const ViewTab = ({activeTab, onTabChange}) => {
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <a className={generateLinkClass(activeTab, LIST_VIEW)} href="#" onClick={e => {onTabChange(LIST_VIEW)}}>
        <Ionicon
          className="rounded-circle mr-2"
          fontSize="25px"
          color={'#007bff'}
          icon="ios-paper"
        />
        <span>列表模式</span>
        </a>
      </li>
      <li className="nav-item">
        <a className={generateLinkClass(activeTab, CHART_VIEW)} href="#" onClick={e => {onTabChange(CHART_VIEW)}}>
          <Ionicon
            className="rounded-circle mr-2"
            fontSize="25px"
            color={'#007bff'}
            icon="ios-pie"
          />
          <span>图表模式</span>
        </a>
      </li>
    </ul>
  )
}

export default ViewTab
