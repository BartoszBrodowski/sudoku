const Button = (props) => {
	return (
		<button type='button' onClick={props.onClick}>
			{props.text}
		</button>
	);
};

export default Button;
