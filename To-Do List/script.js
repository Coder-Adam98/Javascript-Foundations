 const input = document.querySelector('#itemInput');
    const addBtn = document.querySelector('#addBtn');
    const itemList = document.querySelector('#itemList');

    function addItem() {
      const itemInput = input.value.trim();

      if (itemInput === "") return;

      const li = document.createElement('li');
      li.textContent = itemInput;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";

      deleteBtn.addEventListener('click', () => {
        li.remove();
      });

      li.appendChild(deleteBtn);
      itemList.appendChild(li);

      input.value = "";
    }

    addBtn.addEventListener('click', addItem);

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        addItem();
      }
    });