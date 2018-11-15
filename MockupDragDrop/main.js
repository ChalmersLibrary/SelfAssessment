var words = [{
        title: "Responsible",
        selection: 0
    },
    {
        title: "Accessible",
        selection: 0
    },
    {
        title: "Grumpy",
        selection: 0
    },
    {
        title: "Focused",
        selection: 0
    },
    {
        title: "Empathic"
    },
    {
        title: "Energetic"
    },
    {
        title: "Evil"
    },
    {
        title: "Neat and tidy"
    }
];

$.each(words, function(index, value) {
    var listElement = document.createElement("li");
    listElement.setAttribute("draggable", "true");

    var wordElement = document.createElement("span");
    wordElement.textContent = value.title;

    listElement.appendChild(wordElement);

    outerListElement = document.getElementById("zone0");
    outerListElement.appendChild(listElement);
});

$(document).ready(function() {

});