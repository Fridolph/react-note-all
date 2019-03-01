import React from 'react'
import {mount} from 'enzyme'
import Ionicon from 'react-ionicons'
import CategorySelect from '../'


let categories = [
  {
    id: 1,
    name: '旅行',
    type: 'outcome',
    iconName: 'ios-plane'
  },
  {
    id: 2,
    name: '理财',
    type: 'income',
    iconName: 'ios-paper'
  },
  {
    id: 3,
    name: '挣外块',
    type: 'income',
    iconName: 'ios-paper'
  }
]

let props = {
  categories,
  onSelectCategory: jest.fn()
}

let props_with_category = {
  categories,
  selectedCategoryId: 1,
  onSelectCategory: jest.fn()
}

let wrapper

describe('@src/components/CategorySelect', () => {
  // beforeEach(() => {
  //   wrapper = mount(<CategorySelect {...props} />)
  // })

  it('能用上面的categories渲染 正确的items', () => {
    const wrapper = mount(<CategorySelect {...props} />)
    expect(wrapper.find('.category-item').length).toEqual(categories.length)
    expect(wrapper.find('.category-item.active').length).toEqual(0)

    const firstIcon = wrapper.find('.category-item').first().find(Ionicon)
    expect(firstIcon.length).toEqual(1)
    expect(firstIcon.props().icon).toEqual(categories[0].iconName)
  })

  it('渲染出的items，默认项带上高亮状态', () => {
    const wrapper = mount(<CategorySelect {...props_with_category} />)
    expect(wrapper.find('.category-item').first().hasClass('active')).toEqual(true)
  })

  it('点击其他项，可以将高亮状态切换到其他项', () => {
    const wrapper = mount(<CategorySelect {...props_with_category} />)
    // wrapper.find('.category-item').at(1).simulate('click', { preventDefault: () => {} })
    wrapper.find('.category-item').at(1).simulate('click')
    expect(props_with_category.onSelectCategory).toHaveBeenCalledWith(2)
  })
})
