console.log('config.js');

import {Atto} from './js/atto.js';

var plugins =
[
    'simple-dropdown-nav',
];

var github_base = 'https://raw.githubusercontent.com/';
var username = 'abalter/';
var reponame = 'attoweb/';

var base_url = github_base + username + reponame + 'master/';
//base_url = https://raw.githubusercontent.com/abalter/attoweb/master/''

var routes =
{
  footer: {path: "content", source: "footer.md", target: "main"},
};

var default_content =
[
  {target: 'header', source: 'content/header.md'},
  {target: 'nav', source: 'content/nav.md'},
  {target: 'footer', source: 'footer'}
];

var initial_content =
{
    target: 'main', source: 'content/about.md'
};

var configs =
{
    plugins: plugins,
    routes: routes,
    default_content: default_content,
    initial_content: initial_content,
    base_url: base_url
};

var app = new Atto(configs);
app.initializeApp();
