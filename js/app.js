// all variables 

const memory8= document.getElementById("8gb-memory");
const memory16=document.getElementById("16gb-memory");

// variable storage 
const storage256= document.getElementById("256gb-storage");
const storage512= document.getElementById("512gb-storage");
const storage1= document.getElementById("1tb-storage");

// variable delivery 
const freeDelivery=document.getElementById("free-delivery");
const chargeDelivery=document.getElementById("charge-delivery");
 
// total variable 
const memoryCost= document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deliveryCost= document.getElementById("delivery-cost");
const totalPrice= document.getElementById("total-cost");
const grandTotal= document.getElementById("grand-total")
const valueConstant= 1299;
// promo code related variables 
const promoInput= document.getElementById("string-check");
const setButton = document.getElementById("btn-check");




//1. total price calculate  function 

function totalPriceCalculate(){
  const  totalPrice=  parseInt (memoryCost.innerText)+ valueConstant + parseInt(storageCost.innerText) + parseInt (deliveryCost.innerText);
    return totalPrice;
}

//2.  total price update  function 

function updateALLCost(updateId,value){
    const allCost= document.getElementById(updateId+"-cost");
           allCost .innerText=value;
           totalPrice.innerText=totalPriceCalculate();
        grandTotal.innerText= totalPriceCalculate();    
}



//3. promo code function

function promoCheck(){
    const promoStr= "stevekaku"
   const input= promoInput.value;
 //    20% off value 
   if(input.toLowerCase()==promoStr.toLowerCase()){
     const percentage=(parseFloat(grandTotal.innerText)*20)/100;
     console.log(percentage);
     grandTotal.innerText= parseFloat(grandTotal.innerText)- percentage;
      setButton.setAttribute("disabled",true)
   }else{
       alert("please enter valid promo code")
   }

   promoInput.value="";
}





// event listeners button 

memory8.addEventListener("click",function(){
   const memoryValue1=0;
  updateALLCost("memory",memoryValue1)
})
memory16.addEventListener("click",function(){
    const memoryValue2=180;
    updateALLCost("memory",memoryValue2)
})
storage256.addEventListener("click",function(){
 const storageValue1=0;
 updateALLCost("storage",storageValue1)
  
})
storage512.addEventListener("click",function(){
    const storageValue2=100;
    updateALLCost("storage",storageValue2)
})
storage1.addEventListener("click",function(){
    const storageValue3=180;
    updateALLCost("storage",storageValue3)
})
freeDelivery.addEventListener("click",function(){
   const deliveryValue1=0;
   updateALLCost("delivery",deliveryValue1)
})
chargeDelivery.addEventListener("click",function(){
    const deliveryValue2=20;
    updateALLCost("delivery",deliveryValue2)
})
