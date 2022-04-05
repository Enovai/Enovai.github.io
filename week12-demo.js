// document.querySelector('button');

// document.querySelector('.new-quote button');
async function getQuote(){
  console.log('quote button has been clicked');
  try{
    const response= await fetch(endpoint);
    if(!response.ok){
      throw.Error(response.statusText);
    }
    const json= await response.json();
    console.log(json);
    catch(err){
      console.log(err);
      alert('failed');
    }
  }
}
const endpoint = 'https://random-quote-generator.herokuapp.com/api/quotes/random';
const quoteButton = document.querySelector('#js-new-quote');

quoteButton.addEventListener('click',getQuote);
