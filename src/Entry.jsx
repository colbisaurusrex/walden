import React from 'react'
import { Card, Button, Form } from 'semantic-ui-react'
import DatePicker from 'material-ui/DatePicker';
import Location from './Location.jsx'

const Entry = () => {
        const labelStyle = { fontFamily: 'Roboto, sans-serif'}
        return (
            <Card style={{ width: '100%', height: '100%' }}>
                <Card.Content>
                      <Form>
                        <Form.Field>
                            <label style={ labelStyle }>Date</label>
                            <DatePicker hintText="Portrait Dialog" />
                        </Form.Field>
                        <Form.Field>
                            <label style={ labelStyle }>Location</label>
                            <Location />
                        </Form.Field>
                        <Form.Field>
                            <label style={ labelStyle }>Entry</label>
                            <textarea style={{ height: 400,  fontFamily: 'Roboto Mono, monospace'  }}/>
                        </Form.Field>
                        <Button
                            type='submit'
                            style={{ width: '100%' }}
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Content>
            </Card>
        )
}

export default Entry