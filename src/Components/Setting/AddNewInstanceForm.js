/**
 * Add New User Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// intl messages
import IntlMessages from 'Util/IntlMessages';

const AddNewInstanceForm = ({ addNewInstanceDetails, onChangeAddNewInstanceDetails }) => (
    <Form>
        <FormGroup>
            <Label for="userName"><IntlMessages id="common.name" /></Label>
            <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Name"
                value={addNewInstanceDetails.name}
                onChange={(e) => onChangeAddNewInstanceDetails('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="address"><IntlMessages id="common.address" /></Label>
            <Input
                type="text"
                name="address"
                id="address"
                placeholder="address"
                value={addNewInstanceDetails.address}
                onChange={(e) => onChangeAddNewInstanceDetails('address', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="username"><IntlMessages id="common.username" /></Label>
            <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username"
                value={addNewInstanceDetails.username}
                onChange={(e) => onChangeAddNewInstanceDetails('username', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password"><IntlMessages id="common.password" /></Label>
            <Input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={addNewInstanceDetails.password}
                onChange={(e) => onChangeAddNewInstanceDetails('password', e.target.value)}
            />
        </FormGroup>
    </Form>
);

export default AddNewInstanceForm;
