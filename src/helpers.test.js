import { calculateWinner } from './helpers';

test('should return X if X has top row', () => {
    // Arrange the test
    const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBe('X');
});

test('should return O if O has won diagonal', () => {
    // Arrange the test
    const squares = ['O', 'X', 'X', 'X', 'O', 'O', null, null, 'O'];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBe('O');
});

test('should return null when game is incomplete', () => {
    // Arrange the test
    const squares = [null, 'X', 'X', 'X', 'O', 'O', null, null, 'O'];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBe(null);
});

test('should return null when game is drawn', () => {
    // Arrange the test
    const squares = ['X', 'X', 'O', 'O', 'X', 'X', 'X', "O", 'O'];

    // Act
    const winner = calculateWinner(squares);

    // Assert
    expect(winner).toBe(null);
});

