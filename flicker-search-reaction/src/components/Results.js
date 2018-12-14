import React from 'react'

const Results = ({ ItemRender, ItemCollection }) =>
    <div  className="container">
        {ItemCollection && ItemCollection.map(item => <ItemRender key={item.id} {...item} />)}
    </div>

export default Results