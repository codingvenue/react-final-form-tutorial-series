import React from 'react';
import { Form } from 'react-final-form';
import TextInput from '../../components/TextInput';
import SelectField from '../../components/SelectField';

function CustomFieldsForm() {

    return (
        <Form
            onSubmit={(values) => { console.log(values) }}
            render={renderProps => {

                const {
                    handleSubmit,
                } = renderProps;

                return (
                    <form onSubmit={handleSubmit}>
                        <TextInput id="name" name="name" label="Name" placeholder="Name" />
                        <TextInput id="email" type="email" name="email" label="Email" placeholder="Email" />
                        <TextInput id="comment" type="textarea" name="comment" label="Comment" placeholder="Comment" />
                        <SelectField id="country" name="country" label="Country">
                            <option>US</option>
                            <option>CA</option>
                            <option>FR</option>
                        </SelectField>
                        <button type="submit">Send</button>
                    </form>
                )
            }}>

        </Form>
    )
};

export default CustomFieldsForm;