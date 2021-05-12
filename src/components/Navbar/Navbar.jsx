import React, { useState } from 'react'
import "./Navbar.css"

export default function Navbar() {
    const [searchTerm, setSearchTerm] = useState('')
    const searchValue = React.useRef('')
    const handleChange = () => {
        setSearchTerm(searchValue.current.value)
    }
    return (
        <div className="Navbar">
            <div className="logo">
                <a href="/">Tourkick</a>
            </div>
            <div className="search-bar">
                <div className="search-icon">

                </div>
                <input
                 name="searchTerm"
                 value={searchTerm}
                 placeholder="Find millions of live experiences"
                 onChange={handleChange}
                />
            </div>
        </div>
    )
}
