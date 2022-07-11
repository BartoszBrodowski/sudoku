import { useState } from 'react';
import styles from './cell.module.scss';

const _ = require('lodash');

const Cell = ({ row, column, board, active, difficulty }) => {
	const [cellValue, setCellValue] = useState(board[row][column]);
	const hearts = 3;
	// Number of 3x3 squares on each side, meaning
	// a 9x9 cells Sudoku board is 3x3 squares.
	const boardSquaresOnSide = 3;

	const changeCellValueNormal = (e) => {
		const input = e.target.value
		if (active) {
			if (input === '') {
				setCellValue('0')
				board[row][column] = input
			}
			if (_.inRange(input, 1, 10)) {
				if (!isInRow(input) && !isInColumn(input) && !isInSquare(input)) {
					setCellValue(input);
					board[row][column] = input;
				} else {
					hearts -= 1
					setCellValue(input)
					board[row][column] = input
					// Change Cell's background to indicate a mistake has been made
				}
			}
		}
	}

	const changeCellValueCasual = (e) => {
		const input = e.target.value;
		if (active) {
			if (input === '') {
				setCellValue('0');
				board[row][column] = input;
			}
			if (_.inRange(input, 1, 10)) {
				if (!isInRow(input) && !isInColumn(input) && !isInSquare(input)) {
					setCellValue(input);
					board[row][column] = input;
				}
			}
		}
	};

	const isInRow = (num) => {
		return board[row].includes(num);
	};

	const isInColumn = (num) => {
		let columnArray = [];
		for (let i = 0; i < board.length; i++) {
			columnArray.push(board[i][column]);
		}
		return columnArray.indexOf(num) > -1;
	};

	const getSquareRowIndexes = () => {
		if (Math.floor(row / boardSquaresOnSide) === 0) {
			return [0, 1, 2];
		}
		if (Math.floor(row / boardSquaresOnSide) === 1) {
			return [3, 4, 5];
		}
		if (Math.floor(row / boardSquaresOnSide) === 2) {
			return [6, 7, 8];
		}
	};
	const getSquareColumnIndexes = () => {
		if (Math.floor(column / boardSquaresOnSide) === 0) {
			return [0, 1, 2];
		}
		if (Math.floor(column / boardSquaresOnSide) === 1) {
			return [3, 4, 5];
		}
		if (Math.floor(column / boardSquaresOnSide) === 2) {
			return [6, 7, 8];
		}
	};
	// Checks if the number provided is already in a 3x3 square
	// (the board consists of 9 3x3 squares)
	const isInSquare = (num) => {
		const boardSquare = [];
		const rowIndexes = getSquareRowIndexes();
		const columnIndexes = getSquareColumnIndexes();
		for (let i = 0; i < boardSquaresOnSide; i++) {
			for (let j = 0; j < boardSquaresOnSide; j++) {
				boardSquare.push(board[rowIndexes[i]][columnIndexes[j]]);
			}
		}
		return boardSquare.includes(num);
	};

	return (
		<div className={styles['sudoku-node-container']}>
			<input
				type='text'
				value={cellValue === '0' ? '' : cellValue}
				onChange={difficulty == "casual" ? changeCellValueCasual : changeCellValueNormal}
				className={styles['sudoku-node']}
			/>
		</div>
	);
};

export default Cell;
