import React, { Component } from 'react';

class Habit extends Component {
	render() {
		return (
			<li className="habit">
				<span className="habit-name">Reading</span>
				<span className="habit-count">8</span>
				<button className="habit_button habit-increase">
					<i className="fa-solid fa-square-plus"></i>
				</button>
				<button className="habit_button habit-decrease">
					<i className="fa-solid fa-square-minus"></i>
				</button>
				<button className="habit_button habit-delete">
					<i class="fa-solid fa-trash"></i>
				</button>
			</li>
		);
	}
}

export default Habit;