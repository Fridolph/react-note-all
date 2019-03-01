import React from 'react'
import { mount } from 'enzyme'
import PriceForm from '../'

const testItems = [

]

let props = {
  onFormSubmit: jest.fn(),
  onCancelSubmit: jest.fn()
}

let props_with_item = {
  item: testItems,
  onFormSubmit: jest.fn(),
  onCancelSubmit: jest.fn()
}

let wrapper, wrapper2, formInstance

describe('@src/comopnents/PriceForm', () => {
  beforeEach(() => {
    wrapper = mount(<PriceForm {...props} />)
    wrapper2 = mount(<PriceForm {...props_with_item} />)
    formInstance = wrapper.find(PriceForm).instance()
  })

  it('渲染组件匹配snapshot', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper2).toMatchSnapshot()
  })
})

function getInputValue(selector, wrapper) {
  wrapper.find(selector).instance.value
}

function setInputValue(selector, newVal, wrapper) {
  wrapper.find(selector).instance.value = newVal
}
