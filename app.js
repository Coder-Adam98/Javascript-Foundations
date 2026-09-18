const form = document.getElementById('expense-form');
const list = document.getElementById('expense-list');
const totalEl = document.getElementById('total');

let expense = JSON.parse(localStorage.getItem('expenses')) || [];

function renderExpense() {
  list.innerHTML = '';
  let total = 0;

  expense.forEach((exp, index) => {
    total += exp.amount;

    const li = document.createElement('li');
    li.textContent = `${exp.title} - ₹${exp.amount} `;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    deleteBtn.addEventListener('click', () => {
      deleteExpense(index);
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  totalEl.textContent = total;
  localStorage.setItem('expenses', JSON.stringify(expense));
}

function deleteExpense(index) {
  expense.splice(index, 1);
  renderExpense();
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const title = document.getElementById('title').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  if (!title || isNaN(amount)) return;

  expense.push({ title, amount });
  form.reset();
  renderExpense();
});

renderExpense();