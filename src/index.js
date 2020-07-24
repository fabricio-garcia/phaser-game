function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello WebPack';
  return element;
}

document.body.appendChild(component());