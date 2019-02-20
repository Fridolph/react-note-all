import React from 'react'
import {shallow} from 'enzyme'
import ViewTab from '../'

const props = {
  activeTab: 'list',
  onTabChange: jest.fn()
}

let wrapper

describe('@src/components/ViewTab', () => {
  beforeEach(() => {
    wrapper = shallow(<ViewTab {...props} />)
  })

  it('组件 snapshot 匹配', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('文字描述正确', () => {
    const listText = wrapper.find('.nav-item').first().find('span').text()
    expect(listText).toEqual('列表模式')

    const chartText = wrapper.find('.nav-item').last().find('span').text()
    expect(chartText).toEqual('图表模式')
  })

  it('能够正常进行点击事件', () => {
    const tabList = wrapper.find('.nav-item').first().find('a')
    tabList.simulate('click')
    expect(props.onTabChange).toHaveBeenCalledWith('list')

    const tabChart = wrapper.find('.nav-item').last().find('a')
    tabChart.simulate('click')
    expect(props.onTabChange).toHaveBeenCalledWith('chart')
  })
})
