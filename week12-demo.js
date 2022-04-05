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
const endpoint = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
const quoteButton = document.querySelector('#js-new-quote');

quoteButton.addEventListener('click',getQuote);
