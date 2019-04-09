import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'reactstrap';

import BulletList from './BulletList.js';

const AircraftPreview = ({selectedRow}) => {
	return (
		<div className='panel preview-panel'>
			{
				selectedRow ? (
					<div className='preview-flex-wrapper'>
						<div style={{display: 'flex', justifyContent: 'space-between'}}>
							<div>
								<img
									src={require(`../assets/${selectedRow.image}`)}
									alt='user-pic'
									width={200}
									height={125}
								/>
								<div style={{color: '#ff363d'}}>
									<strong>
										{selectedRow.platform} - {selectedRow.tailNumber}
									</strong>
								</div>
							</div>
							<div>
								<Button>Send Message</Button>
							</div>
						</div>
						<BulletList title='LIKES' list={selectedRow.likes} />
						<BulletList title='DISLIKES' list={selectedRow.dislikes} />
						<BulletList title='SECRET' list={selectedRow.secret} />
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