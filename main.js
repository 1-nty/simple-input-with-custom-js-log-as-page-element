let db = new Object
function log() {
  //objectName['propName']
  //onclick collect inputs
  var inputs, index;
  inputs = document.getElementsByTagName('input');
  //set returnObj
  var returnObj = {}
  for (index = 0; index < inputs.length; ++index) {
    // deal with inputs[index] element.
    returnObj[inputs[index].placeholder]=inputs[index].value
  }
  //add to db
  db[`${returnObj.name}`] = returnObj
  //write db to screen
  var para = document.createElement("p")
  para.setAttribute("class", "centeralign");
  var node = document.createTextNode(JSON.stringify(db));
  para.appendChild(node);
  var element = document.getElementById("form1");
  element.appendChild(para);
  //clear
  for (index = 0; index < inputs.length; ++index) {
    // deal with inputs[index] element.
    inputs[index].value=''
  }
  
}

console.log(db)
