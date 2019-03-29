import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EditUserForm from './EditUserForm'

describe(`Registration Form component`, () => {
  const props = {
    onEditSuccess: () => {}
  }

  it('renders a .EditUserForm by default', () => {
    const wrapper = shallow(<EditUserForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the RegistrationFrom given props', () => {
    const wrapper = shallow(<EditUserForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})