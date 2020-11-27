import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './index.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'episodeName', headerName: 'Episode name', width: 230 },
  { field: 'airDate', headerName: 'Air date', width: 190, },
  { field: 'episode',  headerName: 'Episode', width: 90, }
];

export default function TableOfSeries({rows}) {
  return (
    <div className='table'>
      <DataGrid rows={rows} columns={columns} pageSize={25} />
    </div>
  );
}