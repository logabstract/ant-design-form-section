import React from 'react';
import { Form, Input } from 'antd';

export default function Email(props) {
    const { getFieldDecorator, isFieldTouched, getFieldError } = props.form;
    const emailError = isFieldTouched('email') && getFieldError('email');
    const numeroError = isFieldTouched('numero') && getFieldError('numero');

    return (
        <div>
            <div>Datos Poliza</div>
            <div>
                <Form.Item
                    label="Email"
                    required
                    validateStatus={emailError ? 'error' : ''}
                    help={emailError || ''}>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                          }, {
                            required: true, message: 'Please input your E-mail!',
                          }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    label="Numero"
                    required
                    validateStatus={numeroError ? 'error' : ''}
                    help={numeroError || ''}>
                    {getFieldDecorator('numero', {
                        rules: [{
                            type: 'string', message: 'La entrada no es válida', pattern: /^[0-9]+$/,
                          }, {
                            required: true, message: 'Please input your numero!',
                          }],
                    })(<Input />)}
                </Form.Item>
            </div>
        </div>
    )

}