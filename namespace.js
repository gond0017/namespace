
var SNEHA3011 = {
    init: function () {
        let createNewDiv = document.createElement("div");
        createNewDiv.className = "box"; //add "box" class to div
        createNewDiv.textContent = "SNEHA3011"; // add txt content in div
        let getBoxes = document.querySelector("#boxes"); //get div of id boxes
        getBoxes.appendChild(createNewDiv); // apped div with box class to the div with id boxes
        
        //click event
        createNewDiv.addEventListener("click", function () {
            
            createNewDiv.style.borderColor = "green";
            createNewDiv.style.backgroundColor = "lightgreen";
            createNewDiv.style.color = "hotpink";
            
        });
        
        //mouse over event
        createNewDiv.addEventListener("mouseover", function () {

            createNewDiv.classList.toggle("highlight");

        });
        
        //mouse out event
        createNewDiv.addEventListener("mouseout", function () {

            createNewDiv.classList.toggle("highlight");
            createNewDiv.removeAttribute('style');
        });

    }
};