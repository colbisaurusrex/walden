import React, { Component } from 'react';
import { Step, Icon } from 'semantic-ui-react'

export class Stepper extends Component {
    constructor(props) {
        super(props)
        this.setStep = this.setStep.bind(this)
        this.state = {
            step: props.options[0].title,
        }
    }

    setStep(step) {
        this.setState({step})
    }

    render() {
        const {options} = this.props
        return (
            <Step.Group style={{height: '100px'}}>
                {options.map(o => {
                    return (
                        <Step
                            active={this.state.step === o.title}
                            onClick={() => this.setStep(o.title)}
                        >
                            <Icon name={o.icon} />
                            <Step.Content>
                                <Step.Title>{o.title}</Step.Title>
                                <Step.Description>{o.description}</Step.Description>
                            </Step.Content>
                        </Step>
                    )
                })}
            </Step.Group>
        )
    }
}
