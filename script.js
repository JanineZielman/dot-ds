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

function getWhen(event) {
  var input, current;
  input = event.target.innerText.replaceAll(' ', '-').toLowerCase();
  current = window.location.search;
  window.location.href = current + '&when=' + input;
}

function searchWhen() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("whenInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("when");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function getHow(event) {
  var input, current;
  input = event.target.innerText.replaceAll(' ', '-').toLowerCase();
  current = window.location.search;
  window.location.href = current + '&how=' + input;
}

function searchHow() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("howInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("how");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
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
  document.getElementById('criteria-link').href = current + '&criteria=' + val;
}




window.addEventListener("load", (event) => {
  document.getElementById('what-wrapper').style.display = 'none';
  document.getElementById('when-wrapper').style.display = 'none';
  document.getElementById('how-wrapper').style.display = 'none';
  document.getElementById('criteria-wrapper').style.display = 'none';
  document.getElementById('result').style.display = 'none';

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const subject = urlParams.get('subject')
  const what = urlParams.get('what')
  const when = urlParams.get('when')
  const how = urlParams.get('how')
  const criteria = urlParams.get('criteria')

  
  if (subject){
    document.getElementById('subject-wrapper').style.display = 'none';
    document.getElementById('what-wrapper').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${subject}`;
  }
  if(what){
    document.getElementById('what-wrapper').style.display = 'none';
    document.getElementById('when-wrapper').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${subject} • ${what}`;
  }
  if(when){
    document.getElementById('when-wrapper').style.display = 'none';
    document.getElementById('how-wrapper').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${subject} • ${what} • ${when}`;
  }
  if(how){
    document.getElementById('how-wrapper').style.display = 'none';
    document.getElementById('criteria-wrapper').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${subject} • ${what} • ${when} • ${how}`;
  }
  if(criteria){
    document.getElementById('criteria-wrapper').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('topbar').style.display = 'none';
    document.getElementById('final-text').innerHTML = when.replaceAll('-', ' ') + ' students should ' + ' ' + criteria.replaceAll('-', ' ')  + ' ' + how.replaceAll('-', ' ')  + ' ' + what.replaceAll('-', ' ')
  }


  
});