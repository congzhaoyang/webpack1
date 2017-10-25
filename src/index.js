import _ from 'lodash'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // Add the image to our existing div.

  return element;
}

document.body.appendChild(component());