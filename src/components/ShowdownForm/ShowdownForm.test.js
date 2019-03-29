import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShowdownForm from './ShowdownForm'

describe(`Showdown Form component`, () => {
  const props = {
    onCreationSuccess: () => {}
  }

  it('renders a .ShowdownForm by default', () => {
    const wrapper = shallow(<ShowdownForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the ShowdownFrom given props', () => {
    const wrapper = shallow(<ShowdownForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})