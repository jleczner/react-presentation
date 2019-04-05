import React, { Component } from 'react';
import AircraftTable from "./components/AircraftTable";
import AircraftPreview from "./components/AircraftPreview";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedRow: null
		};
	}

	getRowData = () => {
		return [
			{
				tailNumber: '0800010',
				platform: 'V22',
				pxcy_n: '--',
				pxcy_number: '',
				likes: ['dirty talk', 'actuator maintenance', 'sweet and sour chicken'],
				dislikes: ['libtards', 'mall Santas'],
				secret: 'afraid of heights'
			},
			{
				tailNumber: '476909888',
				platform: 'CH-47',
				pxcy_n: 'N/A',
				pxcy_number: '',
				likes: ['hovering', 'Scorsese films'],
				dislikes: ['when the pilot says "INCOMING MISSILE; COMMENCING EVASIVE MANEUVERS"', 'screamo music'],
				secret: 'actually wants two sets of wings to become the true master of the skies'
			},
			{
				tailNumber: '1425468',
				platform: 'F18',
				pxcy_n: '0',
				pxcy_number: '',
				likes: ['neutralizing targets', 'aviator sunglasses', 'drinking and flying'],
				dislikes: ['brown fellas', 'libtards'],
				secret: 'avid Alex Jones/Info Wars fan'

			},
			{
				tailNumber: '42069',
				platform: '737-BetaMax',
				pxcy_n: 'null',
				pxcy_number: 'blank',
				likes: ['taking black and white pictures of sunsets', 'mile high cocktails'],
				dislikes: ['large bottles of shampoo', 'babies', 'when the voices in my head argue'],
				secret: 'lots of ups and downs'
			},
		];
	};

	setSelectedRow = (selectedRow) => {
		this.setState({selectedRow});
	};

	render() {
		const rowData = this.getRowData();

		return (
			<div className='app-container'>
				<AircraftTable rowData={rowData} setSelectedRow={this.setSelectedRow} />
				<AircraftPreview selectedRow={this.state.selectedRow} />
			</div>
		);
	}
}

export default App;
