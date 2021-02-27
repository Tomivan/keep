import React from 'react';
import { Router } from '@reach/router';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Justification from './Justification/justification';
import CreateAward from './Justification/create-award/create-award';
import ContractAward from './contract/contract';
import CreateContractAward from './contract/create-contract/create-contract';
import Staff from './staff/staff';
import SelectVendor from './Justification/create-award/select-vendor/select-vendor';
import HighComplexity from './contract/create-contract/high-complexity/high-complexity';
import LowComplexityForm from './contract/create-contract/low-complexity/low-complexity';
import ServiceContract from './contract/create-contract/service-contract/service-contract';
import UserInfo from './staff/add-staff/user-info/user-info';
import JobInfo from './staff/add-staff/job-info/job-info';
import Review from './staff/add-staff/Review/review';
import Authentication from './staff/add-staff/authentication/authentication';
import AddStaff from './staff/add-staff/add-staff';

const Pages = () => {
    return(
        <Router>
            <Login exact path="/" />
            <Dashboard path="/dashboard" />
            <Justification path="/justification-of-award" />
            <CreateAward path="/create-award" />
            <ContractAward path="/contract-award" />
            <CreateContractAward path="/create-contract-award"/>
            <Staff path="/staff" />
            <SelectVendor path="/select-vendor"/>
            <HighComplexity path="/high-complexity-form" />
            <LowComplexityForm path="/low-complexity-form" />
            <ServiceContract path="/service-contract-high-complexity" />
            <UserInfo path="/user-info" />
            <JobInfo path="/job-info" />
            <Review path="/review" />
            <Authentication path="/authentication" />
            <AddStaff path="/add-staff" />
        </Router>
    )
}
export default Pages;