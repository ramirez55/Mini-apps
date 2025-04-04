function toggleDropdown() {  
    document.getElementById("dropdownMenu").classList.toggle("show");  
}  

function toggleSearch() {  
    var searchContainer = document.getElementById("searchContainer");  
    if (searchContainer.style.display === "flex") {  
        searchContainer.style.display = "none"; // Ocultar el cuadro de búsqueda  
    } else {  
        searchContainer.style.display = "flex"; // Mostrar el cuadro de búsqueda  
    }  
}  

function performSearch() {  
    var query = document.getElementById("searchInput").value;  
    console.log("Buscando: " + query); // Aquí podrías realizar una búsqueda real  
    // Podrías implementar aquí tu lógica de búsqueda  
}  

// Cerrar el menú desplegable si se hace clic fuera de él  
window.onclick = function(event) {  
    if (!event.target.matches('.hamburger') &&   
        !event.target.matches('.dropdown a') &&   
        !event.target.matches('.search-button-mobile')) {  
        var dropdowns = document.getElementsByClassName("dropdown");  
        for (var i = 0; i < dropdowns.length; i++) {  
            var openDropdown = dropdowns[i];  
            if (openDropdown.classList.contains('show')) {  
                openDropdown.classList.remove('show');  
            }  
        }  
    }  

    // Cerrar el cuadro de búsqueda si se hace clic fuera de él  
    var searchContainer = document.getElementById("searchContainer");  
    if (!event.target.matches('.search-button') && !event.target.matches('#searchInput')) {  
        searchContainer.style.display = "none";  
    }  
}  