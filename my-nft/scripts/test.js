function getMessageText(message) {
    return $(message).text;
  }
  
  document.body.innerHTML = '<div id="message">The message</div>';
  console.log(getMessageText(document.body.innerHTML));