const checkbox = document.getElementById('checkbox');

const tablesSection = document.querySelector('.tables-section');

const inventoryTableBody = document.getElementById('inventoryTable');

const inventoryItems = [];

function checkIfExists(item, inventoryItems) {
    return inventoryItems.includes(item);
}

function modifyQuantity(tdElementForQty) {
    const currentQuantity = tdElementForQty.textContent;

    const inputField = document.createElement('input');
    inputField.type = 'number';
    inputField.value = currentQuantity;
    inputField.classList.add('form-control');

    tdElementForQty.textContent = '';
    tdElementForQty.appendChild(inputField);
    inputField.focus();

    inputField.addEventListener('blur', function() {
        tdElementForQty.textContent = inputField.value;
    });

    inputField.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            inputField.blur();
        }
    });
}

inventoryTableBody.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'TD' && target.previousElementSibling) {
        modifyQuantity(target);
    }
});

inputForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const item = document.getElementById('item').value;

    const quantity = document.getElementById('quantity').value;

    if(item.length == 0 || quantity.length == 0) {
        alert("Fill out the form first");
    }

    else {

        if (checkIfExists(item, inventoryItems)) {
            alert('Item already taken');
        }

        else {

            inventoryItems.push(item);
            console.log(inventoryItems)

            const trElement = document.createElement('tr');

            const tdElementForItemName = document.createElement('td');

            const tdElementForQty = document.createElement('td');

            tdElementForItemName.textContent = item;
            tdElementForQty.textContent = quantity;

            trElement.appendChild(tdElementForItemName);
            trElement.appendChild(tdElementForQty);

            inventoryTableBody.appendChild(trElement);
        }

    }

});

checkbox.addEventListener('change', function(e) {
    e.preventDefault();
    if(checkbox.checked == true) {
        tablesSection.style.display = "block";
    }
    else {
        tablesSection.style.display = "none";
    }

});
