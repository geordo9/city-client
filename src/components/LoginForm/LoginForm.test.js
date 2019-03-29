import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginForm from './LoginForm'

describe(`Login Form component`, () => {
  const props = {
    onLoginSuccess: () => {}
  }

  it('renders a .LoginForm by default', () => {
    const wrapper = shallow(<LoginForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the LoginFrom given props', () => {
    const wrapper = shallow(<oginForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})