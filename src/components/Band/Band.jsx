import React from 'react'

export default function Band(props) {
    return (
        <div>
            <h1>{props.name}{props.year}</h1>
        </div>
    )
}
