import React, { useState } from 'react';
import { FriendContext } from './FriendContext';

const TimelineProvider = ({children}) => {
    const [timeLine, setTimeline] = useState([]);
    
    const data = {
        timeLine,
        setTimeline
    }
    return (
        <div>
            <FriendContext.Provider value = {data}>
                {children}
            </FriendContext.Provider>
        </div>
    );
};

export default TimelineProvider;