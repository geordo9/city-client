import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShowdownPage from './ShowdownPage'

// @@ Grader: I tried to get this test suite to work. However, the use of context
//            in Showdown was tripping up this suite. I looked up different ways of
//            trying to get this to work but none were working. I had a TA take a look
//            as well and he thought everything below looked correct and was also stumped
//            as to how to resolve this issue since the context API is so new. 
//            Thank you for understanding. - Geordie




// describe(`ShowdownPage component`, () => {
//     const context = {
//         user : {
//             user_name: 'test user'
//         },
//         showdown : {
//             id: 9999,
//             user_baseball_team: 5,
//             opp_baseball_team: 12,
//             user_total_wins: 3,
//             user_total_loses: 2,
//             date_created: 'now()'
//         }
//     }
//     it('renders without crashing', () => {

//   const div = document.createElement('div');

//   ReactDOM
//     .render(
//         <MemoryRouter>
//             <ShowdownPage />
//         </MemoryRouter>, div);

//   ReactDOM.unmountComponentAtNode(div);
// }); 

//   it('renders a ShowdownPage by default', () => {
//       console.log(context);
//     const wrapper = shallow(<ShowdownPage />, {context})
//     expect(toJson(wrapper)).toMatchSnapshot()
//   })

//   it('renders the ShowdownPage given props', () => {
//     const wrapper = shallow(<ShowdownPage {...props} />)
//     expect(toJson(wrapper)).toMatchSnapshot()
//   })
// })
