function getCurrentDateTime() {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${month}/${day} ${hours}:${minutes}`;
  }

  function updateCurrentDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    currentDateTimeElement.textContent = getCurrentDateTime();
  }

  updateCurrentDateTime();
  setInterval(updateCurrentDateTime, 1000);


  function closePage() {
    // Redirect to a special URL that prompts the user to close the window
    window.location.href = 'main.html';
}