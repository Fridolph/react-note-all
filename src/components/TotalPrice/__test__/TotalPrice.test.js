import React from 'react'
import { shallow } from 'enzyme'
import TotalPrice from '../'

const props = {
  income: 1000,
  outcome: 2000
}

let wrapper

describe('@src/components/TotalPrice', () => {
  beforeEach(() => {
    wrapper = shallow(<TotalPrice {...props} />)
  })

  it('snapshot能匹配', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('component should render correct income & outcome number', () => {
    const wrapper = shallow(<TotalPrice {...props} />)
    expect(wrapper.find('.income span').text() * 1).toEqual(1000)
    expect(wrapper.find('.outcome span').text() * 1).toEqual(2000)
  })
})
