import * as React from 'react';
import './Event.css';

export interface Props {
	date: Date;
	image: string;
}

class Event extends React.Component<Props, object> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		return (
			<div className="event">
				<div className="header">
					<div className="date-container">
						<h4>{this.props.date.toLocaleDateString()}</h4>
					</div>
					{this.props.image ?
						<div className="image-container">
							<img src={this.props.image} />
						</div> :
						''}
				</div>
				<div className="body">
					<p>{this.props.children}</p>
				</div>
			</div>
		);
	}
}

export default Event;