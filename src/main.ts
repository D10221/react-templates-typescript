import React = require('react/addons')
import mainT = require('./main.rt')


class Main extends React.Component<{},{}> {

    constructor(  ) {
        super( {}, null );
    }

    render() {
        return mainT.apply(this)
    }
}


React.render( React.createElement(Main,<any>{}), document.body)
