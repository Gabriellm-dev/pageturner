//import React from 'react';

import Sidebar from '../Dashboard/BodySection/Body';
import Body from '../Dashboard/SideBarSection/Sidebar';


const Dashboard = () => {
    return (
        <div className="dashboard flex">
        <div className="dashboardContainer flex">
            <Sidebar/>
            <Body/>
        </div>
    </div>
    );
};

export default Dashboard;