import React from 'react'
import { CardList } from '../Card-list/CardList'
import './card.css'
import { SearchRow } from '../SearchRow/SearchRow'
export const Card = (props) => (
    <div className='card'>
        <SearchRow
        handleSearchChange = {props.handleSearchChange}
        handleFilterChange = {props.handleFilterChange}
        />
        <div className='countries'>
        {props.countries.map(country => (
            <CardList
                selectedcountry={props.selectedcountry}
                onCountryClick = {props.onCountryClick}
                country={country}
            />
        ))} 
        </div>
    </div>
)
