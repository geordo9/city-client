import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RegistrationForm from './RegistrationForm'

describe(`Registration Form component`, () => {
  const props = {
    onRegistrationSuccess: () => {}
  }

  it('renders a .RegistrationForm by default', () => {
    const wrapper = shallow(<RegistrationForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the RegistrationFrom given props', () => {
    const wrapper = shallow(<RegistrationForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})