import React from 'react';

import { Table, TableHead, TableRow, TableBody, TableCell } from '@material-ui/core'; 
import CompTile from './CompTile.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}))

export default function CustomTable(props) {
    const classes = useStyles();

    const { tableData } = props;
    return (
        <div className={classes.table}>
            {tableData.map((data, idx) => {
                return <CompTile data={data} key={idx}/>
            })}
        </div>
    )
}