import React from 'react';
import PropTypes from 'prop-types';

const BulletList = ({title, list}) => (
	<div>
		<div>
			<strong>{title}</strong>
		</div>
		<ul>
			{
				list.map((item, i) => {
					return (
						<li key={i}>
							{item}
						</li>
					);
				})
			}
		</ul>
	</div>
);

BulletList.propTypes = {
	title: PropTypes.string.isRequired,
	list: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BulletList;