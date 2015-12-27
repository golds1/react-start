//import  React,{ Component } from 'react';
//
//export  class Demo extends Component {
//    render() {
//        return (
//             <div><h1>Demo Hello world from demo.jsx</h1></div>
//
//        );
//    }
//}
//


var React = require('react');

var Demo = React.createClass({
    render: function createDemoComponent() {

        return (
            <div>
                <h3>this is an example for starting reactjs</h3>
                <textarea placeholder="dummy area"/>
            </div>
        );
    }
});
// to export multiple components in the same file
// meantime when to import one of them, require('...').Demo
module.exports = {
    Demo: Demo
};
