import React, { useState } from 'react'
import useFocus from './useFocus'
import './SearchBar.css'

const isInvalid = s => !(/^[a-z]*$/i.test(s))

const SearchBar = ({ onSearch = () => { }, error, isLoading }) => {
    const [query, setQuery] = useState('')

    // Set focus on inout box (UC 1.1)
    const searchRef = useFocus(null)

    // Fire search call when user clicks button (UC 3.1)
    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(query)

        // Clear input box after a search fires (UC 3.2)
        setQuery('')
    }

    const message = isInvalid(query) ? 'Queries can have just letters' : ''
    return (
        < form onSubmit={onSubmit} >
            <input
                className={isInvalid(query) ? "error" : 'normal'}
                disabled={isLoading || error}
                onChange={e => setQuery(e.target.value)}
                placeholder='Enter tag to search...'
                ref={searchRef}
                type='text'
                value={query}
            />
            {' '}
            <button
                disabled={isLoading || error || query === '' || isInvalid(query)}
                type='submit'
            >
                Search
            </button>
            <div id="message">{message}</div>
        </form >
    )
}

export default SearchBar