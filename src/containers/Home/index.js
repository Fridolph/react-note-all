import React, {Component} from 'react'
// import './home.css'
import TotalPrice from '../../components/TotalPrice'
import MonthPicker from '../../components/MonthPicker'
import ViewTab from '../../components/ViewTab'
import PriceList from '../../components/PriceList'
import CreateBtn from '../../components/CreateBtn'

import { LIST_VIEW, CHART_VIEW } from '../../constants'

const items = [{
  id: 'i0001',
  title: '去旅游',
  price: 20000,
  date: '2018-09-30',
  category: {
    id: 'c0001',
    name: '旅行',
    type: 'outcome',
    iconName: 'ios-plane'
  }
},
{
  id: 'i0002',
  title: '吃美食',
  price: 500,
  date: '2018-10-01',
  category: {
    id: 'c0002',
    name: '美食',
    type: 'outcome',
    iconName: 'ios-plane'
  }
}
]

let income = 0
let outcome = 20500

export default class Home extends Component {
  onModifyItem = () => {
    console.log('onModifyItem')
  }

  onDeleteItem = () => {
    console.log('onDeleteItem')
  }

  onTabChange = (view) => {
    console.log('onTabChange', view)
  }

  onCreateNew = () => {
    console.log('onCreateNew ')
  }

  render() {
    return (
      <React.Fragment>
        <header className="app-header container-fluid">
          <div className="row">
            <div className="col-4">
              <MonthPicker />
            </div>
            <div className="col-8">
              <TotalPrice
                income={income}
                outcome={outcome}
              />
            </div>
          </div>
        </header>

        <div className="contant-area py-3 px-3">
          <ViewTab
            activeTab={LIST_VIEW}
            onTabChange={this.onTabChange}
          />

          <CreateBtn onClick={() => console.log('CreateBtn click')} />

          <PriceList
            items={items}
            onModifyItem={this.onModifyItem}
            onDeleteItem={this.onDeleteItem}
          />

        </div>


      </React.Fragment>
    )
  }
}
