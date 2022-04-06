'use strict'
const main=document.querySelector('.main');
const btn=document.querySelector('.btn');
const btn2=document.querySelector('.btn2');
const btn3=document.querySelector('.btn3');
const input=document.querySelector('input');
const sorry=document.querySelector('.sorry');
const btnbody=document.body;

let arr=[];

const meal=function(input1,res){
  let html=
  `<div class="div"><img src="${res.strMealThumb}" alt="">
 
    <button class="btn1"  id="${res.idMeal}">Get Recipe</button>
    <h2 class="text">${input1}  ${res.strArea}</h2>
    <img class="img1" src="${res.strMealThumb}" alt="">
  </div> `
  main.insertAdjacentHTML('afterend',html)
  
}

const meal1=function(objs){
  let html1=
  `<div class="malumot">
  <button class="btn2">X</button>
  <h1 class="h1">${objs.strCategory}  ${objs.strArea}</h1>
  <h2 class="h2">${objs.strCategory}</h2>
  <h2 class="h3">Instructions:</h2>
  <p>${objs.strInstructions}</p> 
   </div>`
  main.insertAdjacentHTML('beforebegin',html1)
}

btn.addEventListener('click',function(){
  let input1=input.value;
  fetch(` https://www.themealdb.com//api/json/v1/1/search.php?s=${input1}`
  ).then(function(response){
    console.log(response)
    if(!response.ok){
      throw new Error(`Siz izlagan taom topilmadi ${response.status}  ${response.statusText}`)
    }
    return response.json();
  }).then(function(res){
      console.log(res)
    for(let i=0;i<res.meals.length;i++){
      arr.push(res.meals[i]);
      sorry.textContent='';
      let kir=res.meals[i];
      meal(input1,kir)
      
      console.log(kir)
  }
  }).catch(function(error){
    alert(error);
  });
  
  

})
  
  btnbody.addEventListener("click",function(e){
    let element=e.target.closest('.btn1');
    if(!element) return;
    console.log(arr);

    let elementId=element.getAttribute('id');
    let  objs=arr.find(val=>{
      return val.idMeal===elementId;
    })
    meal1(objs)
     
  })

  btnbody.addEventListener('click',function(e){
    let element=e.target.closest('.btn2');
    if(!element) return;
    let a=element.parentNode
    a.classList.toggle('malumot1');
  })
























