import React from 'react'

const Results = ({ ItemRender, collection }) =>
    <div  className="container">
        {collection && collection.map(item => <ItemRender key={item.id} {...item} />)}
    </div>

export default Results