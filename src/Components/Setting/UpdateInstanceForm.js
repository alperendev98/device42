/**
 * Update User Details Form
 */
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// intl messages
import IntlMessages from 'Util/IntlMessages';

const UpdateInstanceForm = ({ instance, onUpdateInstanceDetail }) => (
    <Form>
        <FormGroup>
            <Label for="instanceName"><IntlMessages id="common.name" /></Label>
            <Input
                type="text"
                name="instanceName"
                id="instanceName"
                placeholder="Enter Name"
                value={instance.name}
                onChange={(e) => onUpdateInstanceDetail('name', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="address"><IntlMessages id="common.address" /></Label>
            <Input
                type="text"
                name="address"
                id="address"
                placeholder="address"
                value={instance.address}
                onChange={(e) => onUpdateInstanceDetail('address', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="username"><IntlMessages id="common.username" /></Label>
            <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username"
                value={instance.username}
                onChange={(e) => onUpdateInstanceDetail('username', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="password"><IntlMessages id="common.password" /></Label>
            <Input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={instance.password}
                onChange={(e) => onUpdateInstanceDetail('password', e.target.value)}
            />
        </FormGroup>
    </Form>
);

export default UpdateInstanceForm;
