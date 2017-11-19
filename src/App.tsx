import * as React from 'react';
import TimeLine from './components/TimeLine';
import Event from './components/Event';
import data from './data';
import './App.css';

export interface Props { }

interface EventData {
	image: string;
	date: string;
	body: string;
}

interface Data {
	events: Array<EventData>;
}

class App extends React.Component<Props, object> {
	events: Array<EventData>;
	constructor(props: Props) {
		super(props);
		this.events = (JSON.parse(data) as Data).events;
	}
	timeLine() {
		return (
			<TimeLine>
				{this.events.map((e, index) => (
					<Event key={index} image={e.image} date={new Date(e.date)}>
						{e.body}
					</Event>
				))}
			</TimeLine>
		);
	}
	render() {
		return (
			<div className="app">
				<header>
					<nav>
						<img src="/images/l.png" />
					</nav>
				</header>
				<main>
					{this.timeLine()}
				</main>
				<footer>
					<a href="https://github.com/lucaeLeleiva/">Made with &lt;&#47;&gt; by Me</a>
				</footer>
			</div>
		);
	}
}

export default App;