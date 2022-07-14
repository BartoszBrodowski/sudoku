import { useState } from 'react';
import Board from './components/Board/Board';
import Buttons from './components/Buttons/Buttons';
import Difficulty from './components/Difficulty/Difficulty';
import LoseAlert from './components/LoseAlert/LoseAlert';

import styles from "./style/globals.module.scss"

function App() {
	const initialBoard = [
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
	const [playingBoard, setPlayingBoard] = useState(initialBoard)
	const [difficulty, setDifficulty] = useState("normal")
	const [hearts, setHearts] = useState(3);
	const [isPlaying, setIsPlaying] = useState(true)
	const changeDifficultyHandler = (dif) => {
		setDifficulty(dif)
	}
	const isSolved = () => {
		return !playingBoard.flat().includes("0")
	}
	const loseHeart = () => {
		setHearts((prevState) => prevState - 1)
		console.log("Tracisz serce")
		// console.log(playingBoard)
		console.log(hearts)
		if (hearts === 0) {
			setIsPlaying(false)
		}
	}
	const changeCellValue = (row, col, input) => {
		setPlayingBoard((prevState) => {
			const updatedBoard = prevState
			updatedBoard[row][col] = input
			return updatedBoard
		})
		// const updatedBoard = playingBoard
		// updatedBoard[row][col] = input
		// setPlayingBoard(updatedBoard)
	}
	const resetBoard = () => {
		setPlayingBoard(initialBoard)
	}
	
	const resetGame = () => {
		setIsPlaying((isPlaying) => !isPlaying)
		resetBoard()
		setHearts(3)
	}

	return (
		<div className={styles.App}>
			<div>{hearts}</div>
			<div className='w-full h-24 bg-black'></div>
			<Board board={playingBoard} changeCellValue={changeCellValue} onMistake={loseHeart} 
			difficulty={difficulty}/>
			<Buttons check={isSolved} />
			<Difficulty difficulty={difficulty} changeDifficulty={changeDifficultyHandler}/>
			{!isPlaying && <LoseAlert reset={resetGame}/>}	
		</div>
	);
}

export default App;
