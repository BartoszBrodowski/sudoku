const Difficulty = (props) => {
    const changeDifficulty = (dif) => {
        props.changeDifficulty(dif)
    }
    return (
        <div>
            <button type="button" onClick={() => changeDifficulty("casual")}>Casual</button>
            <button type="button" onClick={() => changeDifficulty("normal")}>Normal</button>
        </div>
    )
}

export default Difficulty