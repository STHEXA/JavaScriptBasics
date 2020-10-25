'use strict';

const signal = 'pink'

switch (signal) {
  case 'red':
    console.log('stop!');
    break;
  case 'yello':
    console.log('caution!');
    break;
  case 'blue':
    console.log('go!');
    break;
  default:
    console.log('wrong signal');
}