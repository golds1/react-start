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
var data = [
    {id: 1, author: "Pete hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walker", text: "This is *another* comment"}
];
ReactDOM.render(<Commentbox url="comments.json"  pollInterval={2000}/>, document.getElementById('content'));

