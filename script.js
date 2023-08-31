//add on click for work experience
function addNewWEField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder', 'Enter Here')


  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);

}
//add on click for academic qualification
function addNewAQField() {

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder', 'Enter Here')


  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);

}


function skillsField() {
  //add on click for skills

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('skills');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder', 'Enter Here')


  let skillsOb = document.getElementById("skills");
  let skillsAddButtonOb = document.getElementById("skillsAddButton");

  skillsOb.insertBefore(newNode, skillsAddButtonOb);


}
