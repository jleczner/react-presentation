import React from 'react';
import PropTypes from 'prop-types';

const AircraftPreview = ({selectedRow}) => {

	const getDetailList = (list) => {
		return list.map(item => {
			return (
				<div>{item}</div>
			)
		});
	};

	let likes, dislikes;

	if (selectedRow) {
		likes = getDetailList(selectedRow.likes);
		dislikes = getDetailList(selectedRow.dislikes);
	}

	return (
		<div className='panel preview-panel'>
			{
				selectedRow ? (
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						width: '80%',
						padding: 5
					}}>
						<div style={{color: '#ff363d', textAlign: 'center'}}>
							<strong>
								{selectedRow.platform} - {selectedRow.tailNumber}
							</strong>
						</div>
						<div>
							<div><strong>LIKES</strong></div>
							<div style={{padding: 10}}>
								{likes}
							</div>
						</div>
						<div>
							<div><strong>DISLIKES</strong></div>
							<div style={{padding: 10}}>
								{dislikes}
							</div>
						</div>
						<div>
							<div><strong>SECRET</strong></div>
							<div style={{padding: 10}}>
								{selectedRow.secret}
							</div>
						</div>
					</div>
				) : (
					<div style={{margin: 'auto'}}>
						Select an aircraft
					</div>
				)
			}
		</div>
	);
};

AircraftPreview.propTypes = {
	selectedRow: PropTypes.object
};

export default AircraftPreview;