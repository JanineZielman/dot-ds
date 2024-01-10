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
  activateBalls();
}


function getSubject(event) {
  var input, current;
  input = event.target.innerText.replaceAll(' ', '-').toLowerCase();
  current = window.location.search;
  event.target.classList.toggle('active');
  document.getElementById("active-subject").appendChild(event.target);
}

function subjectNext() {
  var input, current;
  current = window.location.search;
  let active = document.getElementsByClassName('active');
  for (i = 0; i < active.length; i++) {
    input += `${active[i].innerText}`;
    
  }
  window.location.href = current + '?subject=' + input.replaceAll('undefined', '');
}

function getWhen(event) {
  var input, current;
  input = event.target.innerText.replaceAll(' ', '-').toLowerCase();
  current = window.location.search;
  event.target.classList.toggle('active');
  document.getElementById("active-when").appendChild(event.target);
}

function whenNext() {
  var input, current;
  current = window.location.search;
  let active = document.getElementsByClassName('active');
  for (i = 0; i < active.length; i++) {
    input += `${active[i].innerText}`;
    
  }
  window.location.href = current + '&when=' + input.replaceAll('undefined', '');
}

function getHow(event) {
  var input, current;
  input = event.target.innerText.replaceAll(' ', '-').toLowerCase();
  current = window.location.search;
  event.target.classList.toggle('active');
  document.getElementById("active-how").appendChild(event.target);
}

function howNext(){
  var input, current;
  current = window.location.search;
  let active = document.getElementsByClassName('active');
  for (i = 0; i < active.length; i++) {
    input += `${active[i].innerText}, `;
    
  }
  window.location.href = current + '&how=' + input.replaceAll('undefined', '');
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
  let final;

  
  if (subject){
    document.getElementById('subject-wrapper').style.display = 'none';
    // document.getElementById('subject-wrapper').style.opacity = '0';
    document.getElementById('how-wrapper').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${subject}`;
  }
  if(how){
    document.getElementById('how-wrapper').style.display = 'none';
    document.getElementById('what-wrapper').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${subject} • ${how}`;
  }
  if(what){
    document.getElementById('what-wrapper').style.display = 'none';
    document.getElementById('criteria-wrapper').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${subject} • ${how} • ${what}`;
  }
  if(criteria){
    document.getElementById('criteria-wrapper').style.display = 'none';
    document.getElementById('when-wrapper').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${subject} • ${how} • ${what} • ${criteria}`;
  }
  if(when){
    document.getElementById('when-wrapper').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('topbar').style.display = 'none';
    final = when.replaceAll('-', ' ') + ' students should ' + ' '  + ' ' + how.replaceAll('-', ' ')  + ' ' + what.replaceAll('-', ' ')  + ' while ' + criteria.replaceAll('-', ' ')
  }


  if(final){
    document.getElementById('final-text').innerText = final
  }


  
});