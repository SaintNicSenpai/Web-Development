//Colour code the price cells
var priceCells = document.getElementsByClassName("priceCell");
 for (var index=0;index<priceCells.length;index++){
//console.log("car"+ index +": "+priceCells[index].textContent);
var text = priceCells[index].textContent;
var withoutR = text.substr(1,text.length-1);
var withoutCommas = withoutR.replace(new RegExp(',','g'),'');
var actualprice = parseFloat(withoutCommas);
if(actualprice>500000)
{
    priceCells[index].style.color="red";
    
 }
 }
 //console.log("Hello World")


//calculate the average price of sections
var sections = document.getElementsByClassName("section");

for (var i=0;i<sections.length;i++)
{
    var sectionsPrices = sections[i].getElementsByClassName("priceCell");
    var sum = 0;
     for (var j=0;j<sectionsPrices.length;j++)
     {
         var Actualprice = parseFloat(sectionsPrices[j].textContent.substr(1,sectionsPrices[j].textContent.length-1).replace(new RegExp(',','g'),'')); 
          sum+=Actualprice;
     }
     var average = (sum/sectionsPrices.length).toFixed(2);
     sections[i].getElementsByClassName("sectionheaders")[0].innerHTML +="<span style ='color:#42a5f5'>[Average Price: <span style='color:#ec407a'>R"+average+"</span>]</span>"
}

function DoThing() 
{

    for(let i = 0; i < 10; i++) 
    {
 
       console.log(i);
 
    }
 
    return i;
 
}