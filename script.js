function searchSubject() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("subjectInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("subject");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function getInput() {
  var input, val, current;
  input = document.getElementById("whatInput");
  val = input.value.toLowerCase().replaceAll(' ', '-');
  current = window.location.search;
  document.getElementById('what-link').href = current + '&what=' + val;
}

let when,condition,criteria; 

function getWhen() {
  var input, val, current;
  input = document.getElementById("whenInput");
  val = input.value.toLowerCase().replaceAll(' ', '-');
  current = window.location.search;
  when = '&when=' + val;
}

// function getCondition() {
//   var input, val, current;
//   input = document.getElementById("conditionInput");
//   val = input.value.toLowerCase().replaceAll(' ', '-');
//   current = window.location.search;
//   condition = '&condition=' + val;
//   document.getElementById('when-how-link').href = current + when + condition + criteria;
// }

function conditionSearch(event) {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("conditionInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("condition");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      li[i].addEventListener("click", function (event) {
        input.value = event.target.innerText;
      });
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          if(event.key == 'Enter'){
            current = window.location.search;
            condition = '&condition=' + li[i].innerText.toLowerCase();
            input.value = txtValue;
          }
      } else {
          li[i].style.display = "none";
      }
  }
}


function getCriteria() {
  var input, val, current;
  input = document.getElementById("criteriaInput");
  val = input.value.toLowerCase().replaceAll(' ', '-');
  current = window.location.search;
  criteria = '&criteria=' + val;
  document.getElementById('when-how-link').href = current + when + condition + criteria;
}

window.addEventListener("load", (event) => {
  document.getElementById('what-wrapper').style.display = 'none';
  document.getElementById('when-how-wrapper').style.display = 'none';
  document.getElementById('result').style.display = 'none';

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const subject = urlParams.get('subject')
  const what = urlParams.get('what')
  const when = urlParams.get('when')
  const condition = urlParams.get('condition')
  const criteria = urlParams.get('criteria')
  
  if (subject){
    document.getElementById('subject-wrapper').style.display = 'none';
    document.getElementById('what-wrapper').style.display = 'block';
  }
  if(what){
    document.getElementById('what-wrapper').style.display = 'none';
    document.getElementById('when-how-wrapper').style.display = 'block';
  }
  if(when){
    document.getElementById('when-how-wrapper').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    document.getElementById('final-text').innerHTML = when.replaceAll('-', ' ') + ' students should ' + ' ' + criteria.replaceAll('-', ' ')  + ' ' + condition.replaceAll('-', ' ')  + ' ' + what.replaceAll('-', ' ')
  }

});