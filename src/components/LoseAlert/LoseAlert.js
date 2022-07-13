import styles from "./losealert.module.scss"

const LoseAlert = (props) => {
    return (
        <div className={styles['lose-alert']}>
            <div className={styles['lose-alert-content']}>
                <h1>You lost!</h1>
                <p>It's ok. You can play again and make up for the lose!</p>
                <button className={styles['restart-button']} onClick={props.reset}>Restart</button>
            </div>
        </div>
    )
}

export default LoseAlert