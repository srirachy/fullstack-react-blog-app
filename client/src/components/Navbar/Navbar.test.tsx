import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

function setup(_render: any) {
  _render(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar />} />
      </Routes>
    </BrowserRouter>,
  );
}

describe('navbar has buttons', () => {
  test('loads items eventually', async () => {
    // check the initial states [showTooltip: true, showTempToolTip: true]
    setup(render);
    // assert Tooltip is present
    const submitNav = screen.getByText('submit link button');
    expect(submitNav).toBeDefined();
  });

  test('fake button is not present', async () => {
    setup(render);
    const fakeButton = screen.findByTestId('some fake button id');
    expect(Object.entries(fakeButton)).toHaveLength(0);
  });
});
