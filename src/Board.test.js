import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('should mutate on button click', () => {
    const board = render(<Board />);
    const buttons = board.queryAllByRole('button')

    fireEvent.click(buttons[0]);

    expect(buttons[0].innerHTML).toEqual('X')
});

test('should say who the next player is', () => {
    const board = render(<Board />);
    const buttons = board.queryAllByRole('button')
    const nextPlayer = board.getByText('Next player: X')

    expect(nextPlayer.textContent).toEqual('Next player: X')

    fireEvent.click(buttons[0]);

    expect(nextPlayer.textContent).toEqual('Next player: O')

    fireEvent.click(buttons[0]);

    expect(nextPlayer.textContent).toEqual('Next player: X')

    fireEvent.click(buttons[0]);

    expect(nextPlayer.textContent).toEqual('Next player: O')
});
