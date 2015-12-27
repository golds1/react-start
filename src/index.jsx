// es2015 style
//import React from 'react'
//import ReactDOM from 'react-dom'
//import Demo from './components/demo.jsx'


//
// class App extends React.Component {
//    render() {
//        return (
//            <div>
//                <h1>Rendered in index.js!</h1>
//                <p>This is the starter project </p>
//            </div>
//        );
//    }
//}
//
//var app = document.createElement('div');
//document.body.appendChild(app);
//render.render(<App/>, app);
var React = require('react');
var ReactDOM = require('react-dom');
//var Demo = require('./components/demo.jsx').Demo;
var Commentbox = require('./components/tutorial.jsx').CommentBox;
var FilterableProductTable = require('./components/products.jsx');

ReactDOM.render(<Commentbox url="comments.json" pollInterval={2000}/>, document.getElementById('content'));

ReactDOM.render(<FilterableProductTable url="products.json"/>, document.getElementById('products'));

