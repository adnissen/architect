var Architect = {};

Architect.find = function(name){
  return document.querySelectorAll('*[data-' + name + ']') || [];
};

Architect.getValue = function(name){
  ret = [];
  elements = document.querySelectorAll('*[data-' + name + ']');
  for (var i = 0; i < elements.length; i ++){ 
    ret.push(elements[i].attributes[0].value);
  }
  return ret;
}

