'use strict';
const investedPrice = document.getElementById('invested-price');
const shareCount = document.getElementById('share-count');
const finalPrice = document.getElementById('final-price');
const btnAnalyse = document.getElementById('btn-analyse');
const result = document.getElementById('result');

// Functions
const showMessage = function (message, color) {
  result.style.display = 'block';
  result.style.color = color;
  result.textContent = message;
  investedPrice.value = null;
  shareCount.value = null;
  finalPrice.value = null;
};

const shareAnalyser = function (e) {
  e.preventDefault();
  const investedSharePrice = investedPrice.value;
  const numberOfShares = shareCount.value;
  const finalSharePrice = finalPrice.value;
  
  
  
  if (investedSharePrice && numberOfShares && finalSharePrice && (numberOfShares != 0)) {
    
    
    if (numberOfShares > 1)
  {
     
     if (investedSharePrice < finalSharePrice)
     
    {
     
       showMessage(
        `You have invested in ${numberOfShares} shares at ₹${investedSharePrice}, now the final price is ₹${finalSharePrice} & you have made a profit of ₹${
          (finalSharePrice - investedSharePrice) * numberOfShares
        }`,
        'green'
      );
       
    } 
      
      else if (investedSharePrice > finalSharePrice) 
      {
         showMessage(
        `You have invested in ${numberOfShares} shares at ₹${investedSharePrice}, now the final price is ₹${finalSharePrice} & you have made a loss of ₹${
          (investedSharePrice - finalSharePrice) * numberOfShares
        }`,
        'red'
      );
      
      } 
      
      else if(investedSharePrice == finalSharePrice) 
         {
           
      showMessage('You have no profit no loss', 'black');
        
         }
  
 } 
   
  
  else if (numberOfShares == 1)
  {
  
       if (investedSharePrice < finalSharePrice) 
       {
          showMessage(
        `You have invested in ${numberOfShares} share at ₹${investedSharePrice}, now the final price is ₹${finalSharePrice} & you have made a profit of ₹${
          (finalSharePrice - investedSharePrice) * numberOfShares
        }`,
        'green'
      );
       
       } 
    
      else if (investedSharePrice > finalSharePrice) 
       {
      showMessage(
        `You have invested in ${numberOfShares} share at ₹${investedSharePrice}, now the final price is ₹${finalSharePrice} & you have made a loss of ₹${
          (investedSharePrice - finalSharePrice) * numberOfShares
        }`,
        'red'
      );
      
       } 
    
    else if(investedSharePrice == finalSharePrice)
      {
      showMessage('You have no profit no loss', 'black');
      
      }
  } 

  
}     
  
  else 
  {
    showMessage('Enter all the values, and make sure that number of shares purchased should be atleast one.', 'red');
  }
  


  
};

// Event Listeners
btnAnalyse.addEventListener('click', shareAnalyser);

