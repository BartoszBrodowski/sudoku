import Button from './Button';

const Buttons = (props) => {
	return (
		<div>
			<Button text='Check' onClick={props.check} />
			<Button text='Clear' />
			<Button text='Solve' />
		</div>
	);
};

export default Buttons;
