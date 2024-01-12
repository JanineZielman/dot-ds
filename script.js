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
  document.getElementById('how-wrapper').style.display = 'none';
  document.getElementById('criteria-wrapper').style.display = 'none';
  document.getElementById('result').style.display = 'none';

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const subject = urlParams.get('subject')
  const what = urlParams.get('what')
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
    document.getElementById('result').style.display = 'block';
    document.getElementById('topbar').style.display = 'none';
    final =  'make a full sentence using these words: students should ' + ' '  + ' ' + how.replaceAll('-', ' ')  + ' ' + what.replaceAll('-', ' ')  + ' while ' + criteria.replaceAll('-', ' ')
  }


  if(final){

    const data = JSON.stringify({
      "max_tokens": 512,
      "model": "chat-sophos-1",
      "n": 1,
      "source_lang": "en",
      "target_lang": "en",
      "temperature": 0.65,
      "text": final
    });
    
    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log( JSON.parse(this.responseText));
        document.getElementById('final-text').innerText = 'By the end of the semester, ' + JSON.parse(this.responseText).data.outputs?.[0]?.text.replaceAll('"', '')
      }
    });
    
    xhr.open("POST", "https://api.textcortex.com/v1/texts/completions");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer gAAAAABloT7yHMSb4yYsU9H8d2lp1zX3tmwwQwlrVoiyCR2r4-aLPzYzm8Crd0aiJAAjHSYT-CS6nvRVZvXDJYjxgFqgGygfyBvNjMi12fBvqeYbtlyNaOOWX_z4CvoTpmK00gvZlNmY");
    
    xhr.send(data);
  }


  
});