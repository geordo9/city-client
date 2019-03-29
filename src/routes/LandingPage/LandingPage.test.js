import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LandingPage from './LandingPage'


describe(`LandingPage component`, () => {
    
    it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM
    .render(
        <MemoryRouter>
            <LandingPage />
        </MemoryRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
})

  it('renders a LandingPage by default', () => {
    const wrapper = shallow(<LandingPage /> )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})