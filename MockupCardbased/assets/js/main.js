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
    }
];

$(document).ready(function() {
    renderCard(0);
});

function renderCard(index) {
    $('#mainCard .card-header .current').text(index + 1);
    $('#mainCard .card-header .total').text(words.length);
    $('#mainCard .card-body .card-title').text(words[index].title);
    $('#mainCard .card-body .card-text').text("Just a sample description.");
    $('#mainCard .card-header #stepForward').attr('onclick', 'renderCard(' + (index + 1) + ')');
}