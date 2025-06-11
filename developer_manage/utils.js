const getElement = (type, name) => {
  switch (type) {
    case 'id':
      return document.getElementById(name);
    case 'class':
      return document.getElementsByClassName(name);
  }
};
