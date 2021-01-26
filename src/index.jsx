var React = require('react');
var ReactDOM = require('react-dom');
var TestText = require('./components/testText.jsx');
var $ = require('jquery');

ReactDOM.render(<TestText />, document.getElementById('test'));

console.log("working");

console.log($);
