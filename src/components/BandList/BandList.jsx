import React, { useState, useEffect } from 'react'
import Band from '../../components/Band/Band'

export default function BandList() {
    const [bands, setBands] = useState([])

    const fetchData = async () => {
        const bands = await fetch('/band/allBand')
        let bandData = await bands.json();
        setBands(bandData);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {Array.isArray(bands) ? (
                bands.map((band, idx) => {
                    return <Band name={band.name} year={band.year} key={idx}/>
                })
            ) : (<h2>No Bands yet</h2>)
            }
        </div>
    )
}
