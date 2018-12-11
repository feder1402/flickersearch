import React from 'react'

const Header = ({AppName, ItemCollection}) => <h1>{AppName} {ItemCollection && ' - Retrieved ' + ItemCollection.length + ' items'}</h1>

export default Header