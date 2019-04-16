import React, { Component } from 'react';

import AircraftTable from './components/AircraftTable';
import AircraftPreview from './components/AircraftPreview';

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
				dislikes: ['vegetables', 'mall Santas'],
				secret: ['afraid of heights'],
				image: 'V-22-Osprey.jpg'
			},
			{
				tailNumber: '476909888',
				platform: 'CH-47',
				pxcy_n: 'N/A',
				pxcy_number: '',
				likes: ['hovering', 'Scorsese films'],
				dislikes: ['when the pilot says "INCOMING MISSILE; COMMENCING EVASIVE MANEUVERS"', 'screamo music'],
				secret: ['actually wants two sets of wings to become the true master of the skies'],
				image: 'CH47_On_The_Water.jpg'
			},
			{
				tailNumber: '1425468',
				platform: 'F18',
				pxcy_n: '0',
				pxcy_number: '',
				likes: ['neutralizing targets', 'aviator sunglasses', 'drinking and flying'],
				dislikes: ['taxes', 'libtards'],
				secret: ['avid Alex Jones/Info Wars fan'],
				image: 'f18.jpg'
			},
			{
				tailNumber: '42069',
				platform: '737-BetaMax',
				pxcy_n: 'null',
				pxcy_number: 'blank',
				likes: ['travel', 'mile high cocktails'],
				dislikes: ['large bottles of shampoo', 'babies', 'when the voices in my head argue'],
				secret: ['lots of ups and downs'],
				image: '737.jpg'
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
