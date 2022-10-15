
function copyEmail() {
  navigator.clipboard.writeText
    ("aidsdeth@gmail.com")
    
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: aidsdeth@gmail.com"
}

function copyPhoneNum() {
  navigator.clipboard.writeText
    ("(910)-284-2510")
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: (910)-284-2510"
}

function outFunc() {
  const tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
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
