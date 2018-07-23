import React from 'react'
import { Card } from 'semantic-ui-react'

const Metadata = () => {
    const cardStyle = {
        width: '100%',
        flexGrow: 1,
    }
    return (
        <Card style={{ height: '100%', width: '100%' }}>
            <Card.Content
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Card style={cardStyle}>
                    <Card.Content>
                        <Card.Header>
                            Total Entries
                        </Card.Header>
                        <Card.Content>
                            --
                        </Card.Content>
                    </Card.Content>
                </Card>
                <Card style={cardStyle}>
                    <Card.Content>
                        <Card.Header>
                            Days Since First Entry
                        </Card.Header>
                        <Card.Content>
                            --
                        </Card.Content>
                    </Card.Content>
                </Card>
                <Card style={cardStyle}>
                    <Card.Content>
                        <Card.Header>
                            Other Stuff
                        </Card.Header>
                        <Card.Content>
                            --
                        </Card.Content>
                    </Card.Content>
                </Card>
            </Card.Content>
        </Card>
    )
}

export default Metadata