const products = [
    { name: "Amplang Bumbu", price: 20000 },
    { name: "Amplang Kuku Macan", price: 20000 },
    { name: "Amplang Kacang", price: 20000 },
    { name: "Amplang Stik", price: 20000 },
    { name: "Amplang Kapsul", price: 20000 },
    { name: "Abon Tuna, Cakalang, Gabus,Udang, Ayam, Daging, Kepiting", price: 35000 },
    { name: "Amplang Batu Bara", price: 25000 },
    { name: "Keminting", price: 30000 },
];

const cart = [];

function buyProduct(index) {
    const product = products[index - 1];
    cart.push(product);

    // Update the cart display
    const cartItems = document.getElementById("cart-items");
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - Rp${product.price}`;
    cartItems.appendChild(li);

    // Calculate and update the total price
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    const totalPriceDisplay = document.getElementById("total-price");
    totalPriceDisplay.textContent = `Rp${totalPrice}`;
}

// Mendapatkan referensi ke tombol dengan id "myButton"
var myButton = document.getElementById("myButton");

// Menambahkan fungsi saat tombol diklik
myButton.addEventListener("click", function () {
  // Tambahkan kode fungsi yang ingin Anda jalankan saat tombol diklik
  alert("Tombol Navbar diklik!");
});


