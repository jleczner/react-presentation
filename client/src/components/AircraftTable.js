import React from 'react';
import PropTypes from 'prop-types';
import {AgGridReact} from 'ag-grid-react';

const AircraftTable = (props) => {
	const columnDefs = [
		{
			headerName: 'Tail Number',
			field: 'tailNumber',
			checkboxSelection: true
		},
		{
			headerName: 'Platform',
			field: 'platform'
		},
		{
			headerName: 'pxcy_n',
			field: 'pxcy_n'
		},
		{
			headerName: 'pxcy_number',
			field: 'pxcy_number'
		},
		{
			headerName: 'Likes',
			field: 'likes',
			hide: true
		},
		{
			headerName: 'Dislikes',
			field: 'dislikes',
			hide: true
		},
		{
			headerName: 'Secret',
			field: 'secret',
			hide: true
		}
	];

	const onGridReady = (params) => {
		const gridApi = params.api;
		gridApi.sizeColumnsToFit();
	};

	return (
		<div className='ag-theme-balham panel'>
			<AgGridReact
				columnDefs={columnDefs}
				rowData={props.rowData}
				onGridReady={onGridReady}
			/>
		</div>
	);
};

AircraftTable.propTypes = {
	rowData: PropTypes.array.isRequired
};

export default AircraftTable;