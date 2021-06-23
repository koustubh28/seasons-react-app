import './SeasonDisplay.css';
import React from 'react';

//config file for Season Display
const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },

    winter: {
        text: 'Burr, It is cold!',
        iconName: 'snowflake'
    }
};


//logic to get season acc. to months
const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};


//season display component
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    console.log(seasonConfig[season]);

    return (
        <div className={`season-display ${season}`}>
            <i className={ `icon-left massive ${iconName} icon` } />
            <h1>{text}</h1>
            <i className={ `icon-right massive ${iconName} icon` } />
        </div>
    );
};

export default SeasonDisplay;