import React from 'react'


const Photo = ({ title, src }) =>
    <div>
        {src &&
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <p><i>{title}</i></p>
                    <img src={src} width="300px" />
                </div>
            </div>
        }
    </div>

export default Photo