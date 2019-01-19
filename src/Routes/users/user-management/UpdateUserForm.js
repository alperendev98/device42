/**
 * Update User Details Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const UpdateUserForm = ({ user, onUpdateUserDetail }) => (
    <Form>
        <FormGroup>
            <Label for="userName">Name</Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Name"
                value={user.name}
                onChange={(e) => onUpdateUserDetail('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter Email"
                value={user.emailAddress}
                onChange={(e) => onUpdateUserDetail('emailAddress', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="userType">Type</Label>
            <Input
                type="text"
                name="userType"
                id="userType"
                placeholder="Enter Type"
                value={user.type}
                onChange={(e) => onUpdateUserDetail('type', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="accountType">Account Type</Label>
            <Input
                type="text"
                name="accountType"
                id="accountType"
                placeholder="Enter Account Type"
                value={user.accountType}
                onChange={(e) => onUpdateUserDetail('accountType', e.target.value)}
            />
        </FormGroup>
    </Form>
);

export default UpdateUserForm;
