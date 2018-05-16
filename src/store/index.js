import { combineReducers } from 'redux';

const context = require.context('./', false, /\.js$/);
const modalFiles = context.keys().filter(item => item !== './index.js');

let reducers = {};
modalFiles.map(function(item) {
  reducers[item.replace(/(\.\/|\.js)/g, '')] = context(item).default;
});

export default combineReducers(reducers);
