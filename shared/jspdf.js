function savePDF() {
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(72);
    pdf.text(17, 40, "This is YOU.");

    // Title font
    pdf.setFontSize(18);

    // Titles
    pdf.text(17, 60, "Strengths");
    pdf.text(17, 94, "Improve");
    pdf.text(113, 94, "Tone down");

    pdf.setFontSize(12);
    pdf.setDrawColor("#bbbbbb");

    // Improve
    pdf.text(17, 126, "How are you to improve this?");
    pdf.rect(17, 130, 80, 80, "S");

    // Tone down
    pdf.text(113, 126, "How are you to tone down this?");
    pdf.rect(113, 130, 80, 80, "S");

    // Job
    pdf.text(17, 226, "What characteristics does your current job require?");
    pdf.rect(17, 230, 176, 40, "S");

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");

    // Improve words
    $('#zone1 li span').each(function(index, node) {
        if (index < parseInt($('#zone1').data("maxitems")))
            pdf.text(17, (102 + (6 * index)), (index + 1) + ". " + node.textContent);
    });

    // Tone down words
    $('#zone2 li span').each(function(index, node) {
        if (index < parseInt($('#zone2').data("maxitems")))
            pdf.text(113, (102 + (6 * index)), (index + 1) + ". " + node.textContent);
    });

    // Strength words
    var strength = $('#zone3 li span');

    //Insert strength words
    if (strength[0] != undefined) {
        pdf.text(17, 68, "1. " + strength[0].textContent);
    }

    if (strength[1] != undefined) {
        pdf.text(17, 74, "2. " + strength[1].textContent);
    }

    if (strength[2] != undefined) {
        pdf.text(52.2, 68, "3. " + strength[2].textContent);
    }

    if (strength[3] != undefined) {
        pdf.text(52.2, 74, "4. " + strength[3].textContent);
    }

    if (strength[4] != undefined) {
        pdf.text(87.4, 68, "5. " + strength[4].textContent);
    }

    if (strength[5] != undefined) {
        pdf.text(87.4, 74, "6. " + strength[5].textContent);
    }

    if (strength[6] != undefined) {
        pdf.text(122.6, 68, "7. " + strength[6].textContent);
    }

    if (strength[7] != undefined) {
        pdf.text(122.6, 74, "8. " + strength[7].textContent);
    }

    if (strength[8] != undefined) {
        pdf.text(157.8, 68, "9. " + strength[8].textContent);
    }

    if (strength[9] != undefined) {
        pdf.text(157.8, 74, "10. " + strength[9].textContent);
    }

    // Footer information
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");

    pdf.text(17, 280, "This personal characteristics assessment test is printed from Chalmers Canvas module X.");
    pdf.text(17, 284, "Visit canvas.chalmers.se for more information. (footer with (C) and/or info)");

    pdf.save("characteristics.pdf");
}