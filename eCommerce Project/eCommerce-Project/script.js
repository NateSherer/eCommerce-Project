// The fetch fetches the info stored in the json file, 
// fetch('products.json')
// the .then speeds up the process so that 
// .then(response => response.json())
// .then((json) => {
 //    const products = json;
//     return products;
// })
// .catch(error => console.log(error))

// const productGrid = document.querySelector('.products1')

//Loops it so that it does the same for each div
// for(let i = 0; i < 12; i++) {
   //  const allProducts = document.createElement('div');
// productGrid.appendChild(allProducts);

// allProducts[i].textConcent = products.name
// } 


document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
    .then(response => {
        if(!response.ok) {
            throw new Error('NetWork response was not ok' + response.statusText)
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        displayProducts(data);
    })
    .catch(error => {
        console.error('There was problem with the fetch operator', error);
    });
});

function displayProducts(products){
    const container = document.querySelector('.container');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product')

        productDiv.innerHTML = `
        <img src="${product.photo}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <p>Price:$${product.price}</p>
        `;
        container.appendChild(productDiv)
    })
}


// contact form validation below
document.getElementById('feedbackForm').addEventListener('submit', function (event) {

    // Constant Values
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const email = document.getElementById('your_email').value.trim();
    const rating = document.getElementById('rating').value;

    // Validate each field
    if (firstName === '') {
    alert('First name is required.');
    return;
    }

    if (lastName === '') {
    alert('Last name is required.');
    return;
    }

    if (email === '') {
    alert('Email is required.');
    return;
    }

    // Validate email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
    }

    if (rating === '') {
    alert('Please select a rating.');
    return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
});
