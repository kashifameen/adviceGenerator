fetch('https://api.adviceslip.com/advice').then(function(response) {
    return response.json();
}).then(function(data) {
    // Only inside of the second then block can we actually access the result of the fetch
    let adviceString = data.slip.advice;
    let adviceId = data.slip.id;
    const adviceHeader = document.querySelector('.adviceHeader');
    adviceHeader.innerText += adviceId;
    const adviceContent = document.querySelector('.adviceContent');
    adviceContent.innerHTML += `"${adviceString}"`;
    console.log(adviceString);
    console.log(adviceId);
    console.log(data.slip)
})
//

