import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("This is the first article", "It actually works")}
            {newsArticle("Coronavirus updates", "Top News")}
            {newsArticle("Bitcoin reaches 60k", "Crypto")}
            {newsArticle("Tesla hits new high", "Cars & auto")}
            {newsArticle("React Js is awsome", "Of course it is")}
        </div>

    )
}

export default Widgets
