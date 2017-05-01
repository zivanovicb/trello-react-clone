var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var router = express.Router();

import App from '../../client/src/index';
var elem =  React.createElement('h1', null, 'WTF');
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerFormReducer from '../../client/src/reducers/registerFormReducer';

function renderFullPage(html){
  var str = `
  <html>
    <head>
      <title>Redux Universal Example</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `
  return str
}


/* GET home page. */
router.get('/', function(req, res, next) {
  const store = createStore(registerFormReducer);
  var reactApp = ReactDOMServer.renderToString(App)
  // res.render('index', { body: reactApp});
  res.send(renderFullPage(reactApp))
});

module.exports = router;
