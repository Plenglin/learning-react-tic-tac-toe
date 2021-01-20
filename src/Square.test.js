import { render, fireEvent } from '@testing-library/react';
import Square from './Square';

test('should render an empty Square', () => {
    const square = render(<Square value={null} />);

    const button = square.getByRole('button');

    expect(button.innerHTML).toBe('');
});

test('should call the specified onClick when square is clicked', () => {
    const onClick = jest.fn();

    const square = render(<Square value="X" onClick={onClick} />)
    fireEvent.click(square.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1)
});
