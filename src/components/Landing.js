import React, { useEffect, useState } from 'react';

const fetch = require('node-fetch');

export default function Landing() {
    const [comps, setComps] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/stats', {
                method: 'GET'
            });
            const json = await response.json();

            setComps(filter(json.comps));
            console.log(filter(json.comps));
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1> Landing </h1>
            <span>{JSON.stringify(comps)}</span>
        </div>
    );
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
            unit: Object.keys(comp.stats.variations)
        }
    })
    // ret.forEach(comp => delete comp.stats.variations);
    return ret
}