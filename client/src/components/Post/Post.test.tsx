import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DeleteButton } from './DeletePost';

export {};

function setup(_render: any, click: () => void) {
  _render(
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={<DeleteButton onClickHandler={click} />}
        />
      </Routes>
    </BrowserRouter>,
  );
}

describe('test DeletePostButton', function () {
  let clicked = false;

  const click = () => {
    console.log({ click });
    clicked = true;
  };

  setup(render, click);
  const deleteButton = screen.getByText(/delete/i);

  test('delete post button is', async function () {
    expect(deleteButton).toBeDefined();
    expect(clicked).toBeFalsy();

    expect(deleteButton).toBeVisible();
    fireEvent.click(deleteButton);

    expect(clicked).toBeTruthy();
    expect(clicked).not.toBeFalsy();
  });
});
