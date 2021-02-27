import React from 'react';
import { SideNavItems, SideNavLink, SideNav, SideNavMenu, SideNavMenuItem } from 'carbon-components-react/lib/components/UIShell';
import DGS from '../../assets/Images/dgs-logo.png';
import Dashboard from '../../assets/Images/dashboard.svg';
import Activities from '../../assets/Images/activities.svg';
import Procurement from '../../assets/Images/procurement.svg';
import Reporting from '../../assets/Images/reporting.svg';
import './sidebar.css';



const Sidebar = () => {
    return(
        <SideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side Navigation" class="sidenav">
           <div className="nav-heading">
               <img src={DGS} alt="" className="dashboard-logo"/>
           </div>
            <SideNavItems>
                <SideNavLink href="/dashboard"><img src={Dashboard} alt="" className="nav-icon" />Dashboard</SideNavLink>
                <SideNavLink><img src={Activities} alt="" className="nav-icon"/>Activties menu</SideNavLink>
                <SideNavMenu title="Tech Procurement">
                    <SideNavMenuItem>MTO</SideNavMenuItem>
                    <SideNavMenuItem>User Requisition</SideNavMenuItem>
                    <SideNavMenuItem>RFQ</SideNavMenuItem>
                    <SideNavMenuItem href="/justification-of-award">Justification of Award</SideNavMenuItem>
                    <SideNavMenuItem href="/contract-award">Contract Award</SideNavMenuItem>
                    <SideNavMenuItem>Project Milestone</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="Site Reporting">
                   <SideNavMenu title="Daily Reporting">
                   <SideNavMenuItem>General Summary</SideNavMenuItem>
                    <SideNavMenuItem>HSE</SideNavMenuItem>
                    <SideNavMenuItem>Progress Measurement</SideNavMenuItem>
                   </SideNavMenu>
                </SideNavMenu>
                <SideNavLink href="/staff"><img src={Activities} alt="" className="nav-icon"/>Staff</SideNavLink>
            </SideNavItems>
        </SideNav>
    );
};
export default Sidebar;