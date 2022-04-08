// document.querySelector('button');

// document.querySelector('.new-quote button');
async function getQuote(){
  console.log("quote button has been clicked");
  try{
    const response= await fetch(endpoint);
    if(!response.ok){
      throw Error(response.statusText);
    }
    const json= await response.json();
    console.log(json);
    displayQuote(json);
  }catch(err){
    console.log(err);
    alert('Failed');
  }
}
function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent=quote;
}
const endpoint = 'https://geek-jokes.sameerkumar.website/api';
const quoteButton = document.querySelector('#js-new-quote');

quoteButton.addEventListener('click',getQuote);
