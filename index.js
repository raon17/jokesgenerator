// const jokes = require('./jokes');
import { jokes } from './jokes';
import $ from 'jquery';
// import fs from 'fs';

jokes.getOne()
   .then(joke => {
      // document.getElementById('joke').innerHTML = joke;
      $('#joke').text(joke);
   });

// const copy = fs.readFilesynce(__dirname + '/copyright.txt', 'utf8');
// $('#copy').text(copy);