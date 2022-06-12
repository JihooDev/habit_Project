import React, { Component, useRef } from 'react';

class HabitAddForm extends Component {
	inputRef = React.createRef();
	formRef = React.createRef();

	onSubmit = e => {
		e.preventDefault();
		const name = this.inputRef.current.value;
		name && this.props.onAdd(name);
		this.formRef.current.reset();
	};

	render() {
		return (
			<form className="add-form" ref={this.formRef} onSubmit={this.onSubmit}>
				<input type="text" placeholder="Add habit!" className="add-input" ref={this.inputRef} />
				<button className="add-button">Add</button>
			</form>
		);
	}
}

export default HabitAddForm;
