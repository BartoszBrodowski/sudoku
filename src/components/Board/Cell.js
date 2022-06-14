import { useState } from 'react';
import styles from './cell.module.scss';

const _ = require('lodash');

const Cell = (props) => {
	const [value, setValue] = useState(0);

	const changeCellValue = (e) => {
		if (_.inRange(e.target.value, 0, 10)) {
			setValue(e.target.value);
			console.log(e.target.value);
		}
	};

	return (
		<div className={styles['sudoku-node-container']}>
			<input
				type='text'
				value={value == 0 ? '' : value}
				onChange={changeCellValue}
				className={styles['sudoku-node']}
			/>
		</div>
	);
};

export default Cell;
