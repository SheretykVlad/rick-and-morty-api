import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './index.css';

export default function Table({rows, columns, pageSize}) {
  return (
    <div className='table'>
      <DataGrid rows={rows} columns={columns} pageSize={pageSize} />
    </div>
  );
}