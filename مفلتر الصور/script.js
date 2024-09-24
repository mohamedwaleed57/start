let products = JSON.parse(localStorage.getItem('products')) || [];
let currentIndex = null;

document.getElementById('createBtn').addEventListener('click', createProduct);
document.getElementById('deleteAllBtn').addEventListener('click', deleteAllProducts);
document.getElementById('searchTitleBtn').addEventListener('click', searchByTitle);
document.getElementById('searchCategoryBtn').addEventListener('click', searchByCategory);

function createProduct() {
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const taxes = document.getElementById('taxes').value || 0;
    const ads = document.getElementById('ads').value || 0;
    const discount = document.getElementById('discount').value || 0;
    const count = document.getElementById('count').value || 1;
    const category = document.getElementById('category').value;

    const total = (+price + +taxes + +ads) - +discount;

    const product = { title, price, taxes, ads, discount, total, category };
    
    for (let i = 0; i < count; i++) {
        products.push(product);
    }

    updateTable();
    saveToLocalStorage();
    resetForm();
}

function updateTable(filteredProducts = products) {
    const tbody = document.getElementById('productTableBody');
    tbody.innerHTML = '';
    filteredProducts.forEach((product, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.taxes}</td>
                <td>${product.ads}</td>
                <td>${product.discount}</td>
                <td>${product.total}</td>
                <td>${product.category}</td>
                <td><button class="update" onclick="updateProduct(${index})">Update</button></td>
                <td><button class="delete" onclick="deleteProduct(${index})">Delete</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });

    document.getElementById('deleteAllBtn').innerText = `Delete All (${products.length})`;
}

function resetForm() {
    document.getElementById('productForm').reset();
    document.getElementById('total').innerText = 'Total: 0';
}

function updateProduct(index) {
    currentIndex = index;
    const product = products[index];
    document.getElementById('title').value = product.title;
    document.getElementById('price').value = product.price;
    document.getElementById('taxes').value = product.taxes;
    document.getElementById('ads').value = product.ads;
    document.getElementById('discount').value = product.discount;
    document.getElementById('category').value = product.category;
    document.getElementById('createBtn').innerText = 'Update';
    document.getElementById('createBtn').removeEventListener('click', createProduct);
    document.getElementById('createBtn').addEventListener('click', saveUpdate);
}

function saveUpdate() {
    const product = products[currentIndex];
    product.title = document.getElementById('title').value;
    product.price = document.getElementById('price').value;
    product.taxes = document.getElementById('taxes').value;
    product.ads = document.getElementById('ads').value;
    product.discount = document.getElementById('discount').value;
    product.category = document.getElementById('category').value;
    product.total = (+product.price + +product.taxes + +product.ads) - +product.discount;

    updateTable();
    saveToLocalStorage();
    resetForm();
    document.getElementById('createBtn').innerText = 'Create';
    document.getElementById('createBtn').removeEventListener('click', saveUpdate);
    document.getElementById('createBtn').addEventListener('click', createProduct);
}

function deleteProduct(index) {
    products.splice(index, 1);
    updateTable();
    saveToLocalStorage();
}

function deleteAllProducts() {
    products = [];
    updateTable();
    saveToLocalStorage();
}

function searchByTitle() {
    const searchTitle = document.getElementById('searchTitle').value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTitle));
    updateTable(filteredProducts);
}

function searchByCategory() {
    const searchCategory = document.getElementById('searchCategory').value.toLowerCase();
    const filteredProducts = products.filter(product => product.category.toLowerCase().includes(searchCategory));
    updateTable(filteredProducts);
}

function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Initial table update
updateTable();
