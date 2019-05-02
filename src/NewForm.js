import React from 'react';
import { Form, Button } from 'antd';
import DatosPoliza from './DatosPoliza';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class NewForm extends React.Component {

    componentDidMount() {
        this.props.form.validateFields();
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll({ scroll: { offsetTop: 20 } }, (error, values) => {
            if (!error) {
                console.log('ok ', values);
            } else {
                console.log('error ', error, values);
            }
        });
    };

    reset = (e) => {
        e.preventDefault();
        this.props.form.resetFields();
    }

    render() {
        const { form } = this.props;
        const { getFieldsError } = form;
        return (
            <div style={{ margin: 20 }}>
                <h2>overview</h2>
                <Form onSubmit={this.onSubmit}>
                    <DatosPoliza form={form} />
                    <Button onClick={this.reset}>Clear</Button>
                    &nbsp;
                    <Button htmlType="submit" disabled={hasErrors(getFieldsError())}>Completar</Button>
                </Form>

            </div>
        );
    }

}

export default Form.create({ name: 'normal_login' })(NewForm);