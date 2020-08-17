import React from 'react';
import { Form, Field } from 'react-final-form'

function GettingStartedForm() {

    return (
        <Form
            onSubmit={(values) => { console.log(values)}}
            render={renderProps => {

                const {
                    handleSubmit,
                } = renderProps;

                return (
                    <form onSubmit={handleSubmit}>
                        <Field name="name" component="input" placeholder="Name"/>
                        <Field name="email" component="input" type="email" placeholder="Email"/>
                        <Field name="comment" component="textarea"/>
                        <Field name="countries" component="select">
                            <option>US</option>
                            <option>CA</option>
                            <option>FR</option>
                        </Field>
                        <button type="submit">Send</button>
                    </form>
                )
            }}>

        </Form>
    )
};

export default GettingStartedForm;