function copyText(htmlElement) 
{
  if(!htmlElement) {
    return;
  }

  let elementText = htmlElement.innerText;

  let inputElement = document.createElement('input');
  inputElement.setAttribute('value', elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  inputElement.parentNode.removeChild(inputElement);

}

document.querySelector('#copy-text-btn').onclick = 
function()
{
  copyText(document.querySelector('#text'));
}

function goGithub () {
    return window.open("https://github.com/aidsdeth", "_blank")
}
  
function goLinkedin () {
    return window.open("https://www.linkedin.com/in/aidandeth/", "_blank")
}

function goCloudResume () {
    return window.open("https://cloudresumechallenge.dev/docs/the-challenge/aws/", "_blank")
}
  
function goPassGen () {
    return window.open("https://github.com/aidsdeth/password_generator", "_blank")
}
