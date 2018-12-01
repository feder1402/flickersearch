import React, { Component } from 'react'
import './SearchBar.css'

const EMPTY = ''
const isInvalid = s => !(/^[a-z]*$/i.test(s))

class SearchBar extends Component {
    state = { query: EMPTY }

    // Set focus on inout box (UC 1.1)
    searchRef = React.createRef()
    componentDidMount() {
        this.searchRef.current.focus()
    }

    // This fires too often -- we just need it after the search call returns and the results or the error are rendered
    componentDidUpdate() {
        this.searchRef.current.focus()
    }

    // Handle changes to the inout query
    onInputChage = e => this.setState({ query: e.target.value })

    // Fire search call when user clicks button (UC 3.1)
    onSearchClick = (e) => {
        e.preventDefault()
        this.props.onSearch && this.props.onSearch(this.state.query)

        // Clear input box after a search fires (UC 3.2)
        this.setState({ query: EMPTY })
    }

    render = () => {
        const { error, isLoading } = this.props
        const { query } = this.state

        const message = isInvalid(query) ? 'Queries can have just letters' : ''
        return (
            < form onSubmit={this.onSearchClick} >
                <input
                    className={isInvalid(query) ? "error" : 'normal'}
                    disabled={isLoading || error}
                    onChange={this.onInputChage}
                    placeholder='Enter tag to search...'
                    ref={this.searchRef}
                    type='text'
                    value={query}
                />
                <button
                    disabled={isLoading || error || query === EMPTY || isInvalid(query)}
                    // onClick={this.onSearchClick}
                    type='submit'
                >
                    Search
                </button>
                <div id="message">{message}</div>
            </form >
        )
    }
}

export default SearchBar