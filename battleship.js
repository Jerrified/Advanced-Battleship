var view = {
        displayMessage: function(msg) {
                var messageArea = document.getElementById("messageArea");
                messageArea.innerHTML = msg;
        },

        displayHit: function(location) {
            var cell = document.getElementById(location);
            cell.setAttribute("class","hit");
        },

        displayMiss: function(location) {
            var cell = document.getElementById(location);
            cell.setAttribute("class","miss");
        }
};

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
}