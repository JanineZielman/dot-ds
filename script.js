function getStep1(event) {
  event.target.classList.toggle('active');
  document.getElementById("active-1").appendChild(event.target);
}

function step1Next(){
  var input, current, selected;
  current = window.location.search;
  selected = document.getElementById("active-1");
  let active = selected.getElementsByClassName('active');
  for (i = 0; i < active.length; i++) {
    input += `${active[i].innerText} `;
    
  }
  window.location.href = current +  '&step1=' + input.replaceAll('undefined', '').replaceAll('...', '');
}

function getStep2(event) {
  event.target.classList.toggle('active');
  document.getElementById("active-2").appendChild(event.target);
}

function step2Next(){
  var input, current;
  current = window.location.search;
  selected = document.getElementById("active-2");
  let active = selected.getElementsByClassName('active');
  for (i = 0; i < active.length; i++) {
    input += `${active[i].innerText} `;
    
  }
  window.location.href = current + '&step2=' + input.replaceAll('undefined', '').replaceAll('...', '');
}

function getStep3(event) {
  event.target.classList.toggle('active');
  document.getElementById("active-3").appendChild(event.target);
}

function step3Next(){
  var input, current;
  current = window.location.search;
  selected = document.getElementById("active-3");
  let active = selected.getElementsByClassName('active');
  for (i = 0; i < active.length; i++) {
    input += `${active[i].innerText} `;
    
  }
  window.location.href = current + '&step3=' + input.replaceAll('undefined', '').replaceAll('...', '');
}

function getStep4(event) {
  event.target.classList.toggle('active');
  document.getElementById("active-4").appendChild(event.target);
}

function step4Next(){
  var input, current;
  current = window.location.search;
  selected = document.getElementById("active-4");
  let active = selected.getElementsByClassName('active');
  for (i = 0; i < active.length; i++) {
    input += `${active[i].innerText} `;
    
  }
  window.location.href = current + '&step4=' + input.replaceAll('undefined', '').replaceAll('...', '');
}

function getStep5(event) {
  event.target.classList.toggle('active');
  document.getElementById("active-5").appendChild(event.target);
}

function step5Next(){
  var input, current;
  current = window.location.search;
  selected = document.getElementById("active-5");
  let active = selected.getElementsByClassName('active');
  for (i = 0; i < active.length; i++) {
    input += `${active[i].innerText} `;
    
  }
  window.location.href = current + '&step5=' + input.replaceAll('undefined', '').replaceAll('...', '');
}

function getStep6(event) {
  event.target.classList.toggle('active');
  document.getElementById("active-6").appendChild(event.target);
}

function step6Next(){
  var input, current;
  current = window.location.search;
  selected = document.getElementById("active-6");
  let active = selected.getElementsByClassName('active');
  for (i = 0; i < active.length; i++) {
    input += `${active[i].innerText} `;
    
  }
  window.location.href = current + '&step6=' + input.replaceAll('undefined', '').replaceAll('...', '');
}




window.addEventListener("load", (event) => {
  document.getElementById('step1').style.visibility = 'hidden';
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step4').style.display = 'none';
  document.getElementById('step5').style.display = 'none';
  document.getElementById('step6').style.display = 'none';

  document.getElementById('result').style.display = 'none';

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const start = urlParams.get('start')
  const step1 = urlParams.get('step1')
  const step2 = urlParams.get('step2')
  const step3 = urlParams.get('step3')
  const step4 = urlParams.get('step4')
  const step5 = urlParams.get('step5')
  const step6 = urlParams.get('step6')

  let final;

  if(start){
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('step1').style.visibility = 'visible';
  }
  
  if(step1){
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1}`;
  }

  if(step2){
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1} • ${step2}`;
  }

  if(step3){
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1} • ${step2} • ${step3}`;
  }

  if(step4){
    document.getElementById('step4').style.display = 'none';
    document.getElementById('step5').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1} • ${step2} • ${step3} • ${step4}`;
    document.getElementById('insert3').innerText = step3;
  }

  if(step5){
    document.getElementById('step5').style.display = 'none';
    document.getElementById('step6').style.display = 'block';
    document.getElementById('topbar').innerHTML = `${step1} • ${step2} • ${step3} • ${step4} • ${step5}`;
  }

  if(step6){
    document.getElementById('step6').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('topbar').style.display = 'none';
    final = `create a sentence using these exact words: "At the end of this assignment, students will ${step1} a(n) ${step2}, demonstrating ${step6} ${step3} of ${step4} using ${step5}."`
    // document.getElementById('final-text').innerText = final
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
        document.getElementById('final-text').innerText = JSON.parse(this.responseText).data.outputs?.[0]?.text
      }
    });
    
    xhr.open("POST", "https://api.textcortex.com/v1/texts/completions");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer gAAAAABloT7yHMSb4yYsU9H8d2lp1zX3tmwwQwlrVoiyCR2r4-aLPzYzm8Crd0aiJAAjHSYT-CS6nvRVZvXDJYjxgFqgGygfyBvNjMi12fBvqeYbtlyNaOOWX_z4CvoTpmK00gvZlNmY");
    
    xhr.send(data);
  }


  
});