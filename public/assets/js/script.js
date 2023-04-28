
const addButton = document.querySelector('#add');
const inputNewTask = document.querySelector('#newTask');
const form = document.querySelector('form');


const showInput = ()=>{
    inputNewTask.style.display = 'flex';
    inputNewTask.focus();
}

inputNewTask.addEventListener('click',(e)=>{
    console.log(e.target.id);
})

document.addEventListener('keyup',async (e)=>{
   if(e.key.toLowerCase() =='enter' && inputNewTask.value != ""){
        form.submit();
   }
});
document.addEventListener('click',async (e)=>{
   if((e.target.id !='newTask' && inputNewTask.value != '')){
        form.submit();
   }
});

addButton.addEventListener('click',showInput);