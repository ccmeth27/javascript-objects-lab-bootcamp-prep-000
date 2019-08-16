var recipes = new Object({});

var obj = { prop: 1 };
function updateObjectWithKeyAndValue(recipes, key, value) {
 return Object.assign({}, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipe[key] = value;
  return recipes;
}