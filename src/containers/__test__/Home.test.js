import React from 'react'
import {mount} from 'enzyme'
import Home from '../Home'
import TotalPrice from '../../components/TotalPrice/index'
import MonthPicker from '../../components/MonthPicker/index'
import ViewTab from '../../components/ViewTab/index'
import PriceList from '../../components/PriceList/index'
import CreateBtn from '../../components/CreateBtn/index'
import { LIST_VIEW, CHART_VIEW } from '../../constants'
import { parseToYearAndMonth } from '../../utils';

let wrapper

describe('@src/containers/Home', () => {
  beforeEach(() => {
    wrapper = mount(<Home />)
  })

  it('渲染默认布局和相关内容', () => {
    expect(wrapper.find(PriceList).length).toEqual(1)

    expect(wrapper.find(ViewTab).props().activeTab).toEqual(LIST_VIEW)

    const currentDate = parseToYearAndMonth('2019/02/01')
    expect(wrapper.find(MonthPicker).props().year).toEqual(currentDate.year)

    expect(wrapper.find(MonthPicker).props().month).toEqual(currentDate.month)

    expect(wrapper.find(PriceList).props().items.length).toEqual(3)
  })

  it('点击tabview后的相关展示', () => {
    wrapper.find('.nav-item a').last().simulate('click')
    expect(wrapper.find(PriceList).length).toEqual(0)

    expect(wrapper.find('.chart-title').length).toEqual(1)

    expect(wrapper.find(ViewTab).props().activeTab).toEqual(CHART_VIEW)
  })

  it('点击一个新月份，会改变items', () => {
    wrapper.find('.dropdown-toggle').simulate('click')
    wrapper.find('.months-range .dropdown-item').at(0).simulate('click')
    expect(wrapper.find(MonthPicker).props().month).toEqual(1)
    expect(wrapper.find(PriceList).props().items.length).toEqual(0)

    wrapper.find('.dropdown-toggle').simulate('click')
    wrapper.find('.months-range .dropdown-item').at(1).simulate('click')
    expect(wrapper.find(MonthPicker).props().month).toEqual(2)
    expect(wrapper.find(PriceList).props().items.length).toEqual(3)
  })

  it('点击创建新记录按钮, 会新创建一条记录', () => {
    wrapper.find(CreateBtn).simulate('click')
    expect(wrapper.find(PriceList).props().items.length).toEqual(4)
  })

  it('对一条记录，点击更新标题', () => {
    wrapper.find('.list-group-item').at(0).find('.btn-modify').simulate('click')
    expect(wrapper.find('.list-group-item').at(0).find('.title-name').text()).toEqual('更新后的标题')
  })

  it('对一条记录，点击删除按钮', () => {
    wrapper.find('.list-group-item').at(0).find('.btn-delete').simulate('click')
    expect(wrapper.find(PriceList).props().items.length).toEqual(2)
  })
})
