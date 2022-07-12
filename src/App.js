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
	const [hearts, setHearts] = useState(3);
	const changeDifficultyHandler = (dif) => {
		setDifficulty(dif)
	}
	const isSolved = () => {
		return !board.flat().includes("0")
	}
	const checkHearts = () => {
		if (hearts === 0) {
			console.log("You lost!")
			console.log("Restart")
		}
	}
	const loseHeart = () => {
		setHearts(() => hearts - 1)
		checkHearts()
		console.log(hearts)
	}

	return (
		<div className={styles.app}>
			<Board board={board} onMistake={loseHeart} hearts={hearts} difficulty={difficulty}/>
			<Buttons check={isSolved} />
			<Difficulty difficulty={difficulty} changeDifficulty={changeDifficultyHandler}/>
		</div>
	);
}

export default App;
