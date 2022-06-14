import Board from './components/Board/Board';
import Cell from './components/Board/Cell';
import styles from './styles/globals.module.scss';

function App() {
	return (
		<div className={styles.app}>
			<Board />
		</div>
	);
}

export default App;
