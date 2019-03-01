import React, {Component} from 'react'
// import './home.css'
import Ionicon from 'react-ionicons'

import TotalPrice from '../../components/TotalPrice/index'
import MonthPicker from '../../components/MonthPicker/index'
// import ViewTab from '../../components/ViewTab/index'
import PriceList from '../../components/PriceList/index'
import CreateBtn from '../../components/CreateBtn/index'
import Tabs, {Tab} from '../../components/Tabs/index'

import {
  LIST_VIEW,
  CHART_VIEW
} from '../../constants'
import {padLeft, padItemId, parseToYearAndMonth, newDate} from '../../utils'

export const categories = {
  'c001': {
    id: 'c001',
    name: '旅行',
    type: 'outcome',
    iconName: 'ios-plane'
  },
  'c002': {
    id: 'c002',
    name: '美食',
    type: 'outcome',
    iconName: 'ios-plane'
  },
  'c003': {
    id: 'c003',
    name: '挣外块',
    type: 'income',
    iconName: 'ios-paper'
  }
}

export const items = [
  {
    id: 'i0001',
    title: '去旅游',
    price: 20000,
    date: '2019-02-01',
    type: 'outcome',
    cid: 'c001'
  },
  {
    id: 'i0002',
    title: '吃美食',
    price: 500,
    date: '2019-02-02',
    type: 'outcome',
    cid: 'c002'
  },
  {
    id: 'i0003',
    title: '挣外块',
    price: 2500,
    date: '2019-02-15',
    type: 'income',
    cid: 'c003'
  }
]

let itemId = 3

const tabsText = [LIST_VIEW, CHART_VIEW]

class Home extends Component {
  constructor() {
    super()
    this.state = {
      income: 0,
      outcome: 20500,
      currentDate: parseToYearAndMonth('2019/02/01'),
      tabView: tabsText[0],
      items
    }
  }

  onDateChange = date => {
    // const {items} = this.state
    console.log('onDateChange: ', date)
    this.setState({
      currentDate: date
    })
  }

  onModifyItem = curItemId => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === curItemId) {
        return {...item, title: '更新后的标题'}
      } else {
        return item
      }
    })
    this.setState({
      items: updatedItems
    })
  }

  onDeleteItem = curItemId => {
    const updatedItems = this.state.items.filter(item => item.id !== curItemId)
    this.setState({
      items: updatedItems
    })
  }

  onTabChange = index => {
    this.setState({
      tabView: tabsText[index]
    })
  }

  createItem = () => {
    const newItem = {
      id: padItemId((++itemId)),
      title: '新添加的项目',
      price: 0,
      date: newDate(),
      cid: 'c003'
    }
    this.setState({
      items: [newItem, ...this.state.items]
    })
  }

  render() {
    const {currentDate, income, outcome, tabView, items} = this.state
    const itemsWithCategory = items.map(item => {
      item.category = categories[item.cid]
      return item
    }).filter(item => item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`))
    return (
      <React.Fragment>
        <header className="app-header container-fluid">
          <div className="row">
            <div className="col-4">
              <MonthPicker
                year={currentDate.year}
                month={currentDate.month}
                onDateChange={this.onDateChange}
              />
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
          <Tabs activeIndex={0} onTabChange={this.onTabChange}>
            <Tab>
              <Ionicon
                className="rounded-circle mr-2"
                fontSize="25px"
                color={'#007bff'}
                icon="ios-paper"
              />
              <span>列表模式</span>
            </Tab>
            <Tab>
              <Ionicon
                className="rounded-circle mr-2"
                fontSize="25px"
                color={'#007bff'}
                icon="ios-pie"
              />
              <span>图表模式</span>
            </Tab>
          </Tabs>

          {/* <ViewTab
            activeTab={tabView}
            onTabChange={this.onTabChange}
          /> */}

          <CreateBtn />
          {/* <CreateBtn onClick={this.createItem} /> */}

          {
            tabView === LIST_VIEW ? (
              <PriceList
                items={itemsWithCategory}
                onModifyItem={this.onModifyItem}
                onDeleteItem={this.onDeleteItem}
              />
            ) : <div>
              <h2 className="chart-title">这里是图表模式的区域</h2>
            </div>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Home
