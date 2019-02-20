import React from 'react'
import { shallow } from 'enzyme'
import Ionicon from 'react-ionicons'
import PriceList from '../'
import {items, categories} from '../../../containers/Home'

const itemsWithCategory = items.map(item => {
  item.category = categories[item.cid]
  return item
})

const props = {
  items: itemsWithCategory,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn()
}

let wrapper

describe('@src/components/PriceList', () => {
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props} />)
  })

  it('should render the component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render correct price items length', () => {
    expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length)
  })

  it('should render correct icon and price for each item', () => {
    const iconList = wrapper.find('.list-group-item').first().find(Ionicon)
    expect(iconList.length).toEqual(3)
    expect(iconList.first().props().icon)
      .toEqual(itemsWithCategory[0].category.iconName)
  })

  it('should trigger the correct function callbacks', () => {
    const firstItem = wrapper.find('.list-group-item').first()
    // simulate 为 模拟dom事件
    firstItem.find('a').first().simulate('click')
    expect(props.onModifyItem).toHaveBeenCalled()
    firstItem.find('a').last().simulate('click')
    expect(props.onDeleteItem).toHaveBeenCalled()
  })
})
