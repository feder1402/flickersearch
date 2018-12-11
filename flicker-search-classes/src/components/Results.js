import React from 'react'

const Results = ({ ItemRenderer, ItemCollection }) =>
    <div  className="container">
        {ItemCollection && ItemCollection.map(item => <ItemRenderer key={item.id} {...item} />)}
    </div>

export default Results