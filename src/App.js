import Board from './components/Board/Board';
import Buttons from './components/Buttons/Buttons';

import styles from './styles/globals.module.scss';

function App() {
	return (
		<div className={styles.app}>
			<Board />
			<Buttons />
		</div>
	);
}

export default App;
