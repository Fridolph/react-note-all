import React from 'react'
import ReactDOM from 'react-dom'
import {mount} from 'enzyme'
import MonthPicker from '../'
import {items} from '../../../containers/Home'

let props = {
  year: 2019,
  month: 2,
  onChange: jest.fn()
}

let wrapper

describe('@src/components/MonthPicker', () => {
  beforeEach(() => {
    wrapper = mount(<MonthPicker {...props} />)
  })
  it('测试默认状态 - 按钮上渲染年和月是否正确，下拉框是否显示等', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('点击以后显示下拉框，且年和月的列表正确', () => {
    const text = wrapper.find('.dropdown-toggle').first().text()
    expect(text).toEqual('2019年02月')
    expect(wrapper.find('.dropdown-menu').length).toEqual(0)
    expect(wrapper.state('isOpen')).toEqual(false)
    expect(wrapper.state('selectedYear')).toEqual(props.year)
  })

  it('点击年和月以后 触发正确回调', () => {
    wrapper.find('.dropdown-toggle').simulate('click')
    expect(wrapper.state('isOpen')).toEqual(true)
    expect(wrapper.find('.dropdown-menu').length).toEqual(1)
    expect(wrapper.find('.months-range .dropdown-item').length).toEqual(12)
    expect(wrapper.find('.years-range .dropdown-item.active').text()).toEqual('2019 年')
    expect(wrapper.find('.months-range .dropdown-item.active').text()).toEqual('02 月')
    //
    expect(wrapper.find('.years-range .dropdown-item').first().text()).toEqual(`${props.year - 4} 年`)
    expect(wrapper.find('.months-range .dropdown-item').first().text()).toEqual(`01 月`)
  })

  it('对于传的一些特殊值是否有特殊处理', () => {
    wrapper.find('.dropdown-toggle').simulate('click')
    wrapper.find('.years-range .dropdown-item').first().simulate('click')
    // expect(wrapper.find('.years-range .dropdown-item').first().hasClass('active')).toEqual(true)
    expect(wrapper.state('selectedYear')).toEqual(2015)

    wrapper.find('.months-range .dropdown-item').first().simulate('click')
    expect(wrapper.state('isOpen')).toEqual(false)
    expect(props.onChange).toHaveBeenCalledWith(2015, 1)
  })

  it('特殊DOM事件的触发和处理方法', () => {
    let eventMap = {}
    document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb
    })

    const wrapper = mount(<MonthPicker {...props} />)
    wrapper.find('.dropdown-toggle').simulate('click')
    expect(wrapper.state('isOpen')).toEqual(true)
    expect(wrapper.find('.dropdown-menu').length).toEqual(1)

    eventMap.click({
      target: ReactDOM.findDOMNode(wrapper.instance())
    })
    expect(wrapper.state('isOpen')).toEqual(true)

    eventMap.click({
      target: document
    })
    expect(wrapper.state('isOpen')).toEqual(false)
  })
})
