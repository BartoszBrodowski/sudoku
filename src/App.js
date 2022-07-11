import { useState } from 'react';
import Board from './components/Board/Board';
import Buttons from './components/Buttons/Buttons';
import Difficulty from './components/Difficulty/Difficulty';

import styles from './styles/globals.module.scss';

const board = [
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '2', '0', '0', '0'],
	['0', '0', '1', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
];

function App() {
	const [difficulty, setDifficulty] = useState("casual")
	const changeDifficultyHandler = (dif) => {
		setDifficulty(dif)
	}
	const isSolved = () => {
		return !board.flat().includes("0")
	}
	return (
		<div className={styles.app}>
			<Board board={board} difficulty={difficulty}/>
			<Buttons check={isSolved} />
			<Difficulty difficulty={difficulty} changeDifficulty={changeDifficultyHandler}/>
		</div>
	);
}

export default App;
