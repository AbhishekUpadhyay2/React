/** @format */

import React, { Component } from "react";

export default class UserClass extends Component {
	constructor(props) {
		super();
		this.state = {
			count: 0,
		};
	}
	componentDidMount() {
		this.timer = setInterval(() => {
			console.log("op");
		}, 1000);
	}
	componentDidUpdate() {
		console.log("component updated");
	}
	componentWillUnmount() {
		//clear the component
		//this is shared among the components
		clearInterval(this.timer);
	}
	render() {
		const { name, location } = this.props;
		const { count } = this.state;
		return (
			<div>
				<h1>Name: {name}</h1>
				<h2>location: {location}</h2>
				<h4>Count:{count}</h4>
				<button
					onClick={() => {
						this.state.count = this.state.count + 1;
					}}>
					Increase count
				</button>
				<button
					onClick={() => {
						this.setState({ count: this.state.count });
					}}>
					increase state
				</button>
			</div>
		);
	}
}
