const from =document.getElementById('expense-from')
const list =document.getElementById('expense-list')
const totalEl =document.getElementById('total')

let expense =JSON.parse(localStorage.getItem('expenses')) || [];
function renderExpense(){
    list.innerHTML ='';
    let total=0;

    expense.forEach((exp,index)=>{
        total +=exp.amount;
        const li =document.createElement('li');

        li.innerHTML=`${exp.title} -${exp.amount} <button onclick ="deleteExpense(${index})">Delete</button>`
        list.appendChild(li);

    })

    totalEl.textContent =total;
    localStorage.setItem('expenses',JSON.stringify(expense));
}

function deleteExpense(index){
    expense.splice(index,1);
    renderExpense();
}

from.addEventListener('submit',e =>{
   e.preventDefault();
    const title =document.getElementById('title').value;
    const amount= parseFloat(document.getElementById('amount').value);
    expense.push({title,amount})
    from.reset();
    renderExpense();
})
renderExpense();