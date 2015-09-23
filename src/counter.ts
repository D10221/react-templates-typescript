import React = require ('react/addons');

import CounterT = require('./counter.rt')

interface Props {
    initialCount: number
}

interface State {
    count: number
}


class Component extends React.Component<Props,State> {
    constructor( props ) {
        super( props, null );
        this.state = {count: parseInt(props.initialCount)}
    }

    static propTypes: React.ValidationMap<Props> = {
        initialCount: React.PropTypes.number
        }
        
    static defaultProps: Props = {initialCount: 0}

    tick() {
        this.setState( {count: this.state.count + 1} )
    }

    render() {
        return CounterT.apply( this )

    }
}

export = Component