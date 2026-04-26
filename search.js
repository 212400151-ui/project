let notFound = document.getElementById('not-found');


function redirect() {
    window.event.preventDefault(); 
    query = document.getElementById('searchInput').value.toLowerCase().trim();
    currentPage = window.location.pathname.split('/').pop();

    if (query.trim() !== '' && (query.includes('jean') || query.includes('pan') || query.includes('sho') || query.includes('nik') || query.includes('ja') || query.includes('jec') || query.includes('shi') || query.includes('t-shir') || query.includes('polo')  ) ) {
        if (query.trim() !== '' && (query.includes('jean') || query.includes('pan')) ) {
            if('../products/jeans.html' != currentPage ) {
                window.location.href = '../products/jeans.html?query=' + encodeURIComponent(query);       
            }else {
                filter(query);
            }
        }else if (query.trim() !== '' && (query.includes('sho') || query.includes('nik'))) {
            if('../products/shoes.html' != currentPage) {
                window.location.href = '../products/shoes.html?query=' + encodeURIComponent(query);
            }else {
                filter(query);
            }
        }else if (query.trim() !== '' && (query.includes('shi') || query.includes('t-shir') || query.includes('polo') ) ) {
            if('../products/t-shirt.html'!=currentPage){
                window.location.href = '../products/t-shirt.html?query=' + encodeURIComponent(query);
            }else {
                filter(query);
            }
        }else if (query.trim() !== '' && (query.includes('ja') || query.includes('jec')) ) {
            if('../products/jacket.html'!=currentPage){
                window.location.href = '../products/jacket.html?query=' + encodeURIComponent(query);
            }else {
                filter(query);
            }
        }
    }else{
        filter(query);
    }
}

function filter(query){
    allProduct = document.querySelectorAll('.product');
    let count =0;
    allProduct.forEach(product => {
        jacketName = product.querySelector('figcaption').textContent.toLowerCase();
        if(jacketName.includes(query.toLowerCase())){
            product.style.display = 'block';
            count+=1;
        }else {
            product.style.display = 'none';
        }
        
    })
    if (count == 0) {
        allProduct.forEach(product => {
            product.style.display = 'block';
        })
        notFound.style.display = 'block';
    }else if (count != 0) {
        notFound.style.display = 'none';
    }
    
}



