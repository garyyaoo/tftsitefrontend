import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from 'react-collapse';
import classNames from 'classnames';

import { oneCostColor, twoCostColor, threeCostColor, fourCostColor, fiveCostColor, unitCosts } from '../constants.js';
import './CompTile.css';


function importAllImages() {
    const reg = /(?<=_)(.*)(?=\.)/;
    const req = require.context('../imgs', true, /\.jpg$/);
    const images = {};

    req.keys().forEach(fileName => {
        var name = 'tft3_' + fileName.match(reg)[0].replace(/\s/g, '').toLowerCase();
        images[name] = req(fileName);
    })
    return images;
}

const images = importAllImages()

const useStyles = makeStyles(theme => ({
    compTile: {
        backgroundColor: "rgba(57,0,77,.6)",
        margin: '15px 0px 0px 0px',
        display: 'block',
        padding: '10px 0px 0px 10px',
        borderStyle: 'solid',
        borderRadius: '5px',
        borderColor: 'rgba(57,0,77,.6)',
    },
    upperTile: {
        display: 'flex'
    },
    imgTiles: {
        // maxWidth: '50%',
        minWidth: '100%',
        marginRight: '4%',
        width: '100%'
    },
    statsTiles: {
        display: 'block',
    },
    statTile: {
        textAlign: 'right',
        marginBottom: '5%',
        '& *' : {
            margin: '0'
        },
    },
    statsText: {
        color: 'black'
    },
    statsBadge: {
        backgroundColor: "#f8f9fa",
        border: "solid 0px #f8f9fa", 
        borderRadius: '15%',
        padding: '2px 4px 2px 4px',
        color: 'black'
    },
    dropdown: {
        margin: '0px',
        minHeight: '60px',
        backgroundColor: 'rgba(57,0,77,.6)',
        // padding: '0',
    },
    collapsable: {
        transition: "height 500ms",
    },
}))


export default function CompTile(props) {
    const classes = useStyles();

    const { data, key } = props;
    const { traits, stats, units: units_array } = data;
    const { winrate, avg_placement: averagePlacement, top_4_rate: top4Rate } = stats;

    const units = units_array[0].substring(1, units_array[0].length-1).replace(/'/g, '').split(',').map(unit => unit.trim());

    console.log('units', units);

    const [ open, setOpen ] = useState(false)

    function onClick() {
        setOpen(!open)
    }

    return (
        <div>
            <div className={classes.compTile} onClick={onClick}>
                <div className={classes.upperTile}>
                    <div>
                        <span>{traits.map(trait => trait.quantity + ' ' + trait.trait).join(', ')}</span>
                        <div className={classes.imgTiles}>
                            {units.map(unit => {
                            var cost = unitCosts[unit.toLowerCase()];
                            
                            return (
                                <img 
                                    className={classNames({ championPhoto: true, c1: cost === 1, c2: cost === 2, c3: cost === 3, c4: cost === 4, c5: cost === 5 })}
                                    src={images[unit.toLowerCase()]}
                                    alt={unit}/>
                            )
                            })}
                        </div>
                    </div>
                    <div className={classes.statsTiles}>
                        <div className={classes.statTile}>Winrate&nbsp;<span className={classes.statsBadge} style={{color: 'black'}}>{Math.round(winrate*1000)/1000}</span>
                        </div>
                        <div className={classes.statTile}>Average Placement&nbsp;<span className={classes.statsBadge} style={{color: 'black'}}>{Math.round(averagePlacement*1000)/1000}</span>
                        </div>
                        <div className={classes.statTile}>Top 4 Rate&nbsp;<span className={classes.statsBadge} style={{color: 'black'}}>{Math.round(top4Rate*1000)/1000}</span>
                        </div>
                    </div>
                </div><Collapse isOpened={open}>
                <div>
                    <p className={classes.dropdown}>im pickler uck wajdklfja dfjalsdjf djfskdjf</p>
                </div>
            </Collapse>
            </div>
        </div>
    )
}