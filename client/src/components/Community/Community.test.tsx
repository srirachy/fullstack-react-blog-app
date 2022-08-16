// import { render, screen } from '@testing-library/react';
// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ErrorBoundary from '../../ErrorBoundary';
// import { store } from '../../store';
// import Community from './Community';

// function setup(_render) {
//   return _render(
//     <Provider store={store}>
//       <React.StrictMode>
//         <BrowserRouter>
//           <ErrorBoundary>
//             <Routes>
//               <Route path="" element={<Community />} />
//             </Routes>
//           </ErrorBoundary>
//         </BrowserRouter>
//       </React.StrictMode>
//     </Provider>,
//   );
// }

// describe.only('test community post component', () => {
//   test('test view community post button is present', async () => {
//     setup(render);

//     const viewComPostBtn = screen.getByText(/View Community Post/i);
//     expect(viewComPostBtn).toBeVisible();
//   });
// });

export {};
