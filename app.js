var callbackJSON = 'http://api.viki.io/v4/videos.json?app=100250a&per_page=10&page='
var pageNumber = 1
var responseNumber=0;
var trueCount =0;
var falseCount=0;
var trueTally=0;
var falseTally=0;
var addTrue, addFalse;
var moreData = true;


loadData(pageNumber, trueCount, falseCount);

function loadData (pageNumber, trueCount, falseCount, moreData){
  $.getJSON( callbackJSON + pageNumber, function(data){
      moreData = data.more;
      while(responseNumber < 10){
        if (data.response[responseNumber].flags.hd){
          trueCount++;
        }
        else {

          falseCount++;
        }
        responseNumber++;
      }
      tally(pageNumber, trueCount, falseCount, moreData);
  });
}

function tally(pageNumber, trueCount, falseCount, moreData)
{

  trueTally += trueCount;
  falseTally += falseCount;

  if (moreData == true) { 
    pageNumber++;

    loadData(pageNumber, trueCount, falseCount, moreData);  
  }
  else { results(pageNumber, trueTally, falseTally); }
     
}

function results(pageNumber, trueTally, falseTally){
  console.log('There are ' + pageNumber + ' pages.')
  console.log('There are ' + trueTally + ' response objects that have flags:hd set to true.')
  console.log('There are ' + falseTally + ' response objects that have flags:hd set to false.')

}