import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from './Table.js';
import Counter from './Counter';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: '30px'
    }
}))


export default function Stats() {
    const classes = useStyles();

    const [comps, setComps] = useState([]);
    const [gameCount, setGameCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/stats?sort=winrate', {
                method: 'GET'
            });
            const json = await response.json();

            setComps(filter(json.comps));
            setGameCount(json.games)
        }
        fetchData();
    }, [])

    return (
        <div>
            <div>
                <span className={classes.title}>Comp Statistics</span><Counter gameCount={gameCount}/>
            </div>
            <Table
                tableData={comps}/>
        </div>
    )
}

var filter = payload => {
    let ret =  payload.map(comp => {
        return {
            traits: comp.traits.substring(1, comp.traits.length -1).replace(/'/g, '').split(',').map(trait => trait.trim())
                .map(trait => {
                    const [quantity, trait_type] = trait.split(' ');
                    return {
                        trait: trait_type,
                        quantity
                    }
                }),
            stats: comp.stats,
            units: Object.keys(comp.stats.variations)
        }
    })
    // ret.forEach(comp => delete comp.stats.variations);
    return ret
}