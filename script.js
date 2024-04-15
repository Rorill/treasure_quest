document.addEventListener('DOMContentLoaded', () => {
    // Ici votre code JS

    //grid creation
    function makeGrid() {
        let tbl = document.getElementById("gamegrid");

        for(let i = 0; i < 20; i++){
            let myRow = document.createElement("tr");
            myRow.id = "row" +i;
            
            tbl.appendChild(myRow);
            let roww = document.getElementById("row" + i);

            for(let j = 0; j < 20; j++) {
                let myCell = document.createElement("td");

                roww.appendChild(myCell)
            }
        }
    }
    makeGrid();
});
