var recipes = new Object({});

var obj = { prop: 1 };
function updateObjectWithKeyAndValue(recipes, key, value) {
 return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}