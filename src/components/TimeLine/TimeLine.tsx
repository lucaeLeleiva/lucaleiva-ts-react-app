import * as React from 'react';
import './TimeLine.css';

export interface Props { }

class TimeLine extends React.Component<Props, object> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<div className="time-line">
				{this.props.children}
			</div>
		);
	}
}

export default TimeLine;