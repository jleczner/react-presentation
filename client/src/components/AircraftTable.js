import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {AgGridReact} from 'ag-grid-react';

export default class AircraftTable extends Component {
	getColumnDefs = () => {
		return [
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
				// hide: true
			},
			{
				headerName: 'Dislikes',
				field: 'dislikes',
				// hide: true
			},
			{
				headerName: 'Secret',
				field: 'secret',
				// hide: true
			}
		];
	};

	onGridReady = (params) => {
		this.gridApi = params.api;
		this.gridApi.sizeColumnsToFit();
	};

	onSelectionChanged = () => {
		const selectedRows = this.gridApi.getSelectedRows();
		if (selectedRows.length > 0) {
			const selectedRow = selectedRows[0];
			this.props.setSelectedRow(selectedRow);
		} else {
			this.props.setSelectedRow(null);
		}
	};

	render() {
		const columnDefs = this.getColumnDefs();

		return (
			<div className='ag-theme-balham panel'>
				<AgGridReact
					columnDefs={columnDefs}
					rowData={this.props.rowData}
					onGridReady={this.onGridReady}
					onSelectionChanged={this.onSelectionChanged}
				/>
			</div>
		);
	}
}

AircraftTable.propTypes = {
	rowData: PropTypes.array.isRequired,
	setSelectedRow: PropTypes.func
};