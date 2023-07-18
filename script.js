function generateInvoice() {
    var name = document.getElementById('name').value;
    var hours = parseFloat(document.getElementById('hours').value);
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value);

    var subtotal = hours * hourlyRate;
    var tax = subtotal * 0.21;
    var total = subtotal + tax;

    var doc = new jsPDF();
    doc.setFontSize(12);

    // Logo en gegevens
    var logoImgData = 'data:image/png;base64,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'; // Vervang 'base64-encoded-data' door de daadwerkelijke Base64-gecodeerde string van je logo-afbeelding
    var logoImg = new Image();
    logoImg.src = logoImgData;
    logoImg.onload = function() {
        var logoWidth = 50; // Breedte van het logo in mm (pas aan naar wens)
        var logoHeight = logoWidth * (logoImg.height / logoImg.width);
        doc.addImage(logoImgData, 'PNG', 10, 10, logoWidth, logoHeight); // Pas de afmetingen en positie van het logo aan

        doc.setFontSize(10);
        doc.text("Qais", 70, 15); // Vervang 'Jouw bedrijfsnaam' door de naam van jouw bedrijf
        doc.text("Oldenzaalse straat 30 Hengelo", 70, 20); // Vervang 'Jouw adres' door het adres van jouw bedrijf

        // Factuurnummer en datum
        doc.setFontSize(10);
        doc.text("Factuurnummer: 001", 150, 15); // Vervang '001' door het daadwerkelijke factuurnummer
        doc.text("Factuurdatum: " + new Date().toLocaleDateString(), 150, 20);

        // Klantinformatie
        doc.setFontSize(12);
        doc.setFontStyle("bold");
        doc.text("Klantgegevens", 10, 65);
        doc.setFontStyle("normal");
        doc.setFontSize(10);
        doc.text("Naam: " + name, 10, 75);

        // Factuurdetails
        doc.setFontSize(12);
        doc.setFontStyle("bold");
        doc.text("Factuurgegevens", 10, 90);
        doc.setFontStyle("normal");
        doc.setFontSize(10);

        // Omschrijving
        doc.setFontSize(12);
        doc.setFontStyle("bold");
        doc.text("Omschrijving", 10, 100);

        // Eenheden
        doc.setFontSize(12);
        doc.setFontStyle("bold");
        doc.text("Eenheden", 110, 100);

       // Aantal uur
        var hoursText = "Aantal uur: ";
        doc.setFontStyle("normal");
        doc.text(hoursText, 10, 110);
        doc.text(hours.toString(), 110, 110); // Convert naar tekenreeks

        // Uurloon
        var hourlyRateText = "Uurloon:";
        doc.setFontStyle("normal");
        doc.text(hourlyRateText, 10, 120);
        doc.text("\u20AC"+hourlyRate.toFixed(2).toString(), 110, 120); // Convert naar tekenreeks

        // Subtotaal
        var subtotalText = "Subtotaal:";
        doc.setFontStyle("normal");
        doc.text(subtotalText, 10, 130);
        doc.text("\u20AC"+subtotal.toFixed(2).toString(), 110, 130) ; // Convert naar tekenreeks

        // BTW
        var taxText = "BTW (21%):";
        doc.setFontStyle("normal");
        doc.text(taxText, 10, 140);
        doc.text("\u20AC"+tax.toFixed(2).toString(), 110, 140); // Convert naar tekenreeks

        // Totaal
        var totalText = "Totaal:";
        doc.setFontStyle("bold");
        doc.text(totalText, 10, 150);
        doc.text("\u20AC"+total.toFixed(2).toString(), 110, 150); // Convert naar tekenreeks

        // Lijnen
        doc.line(10, 105, doc.internal.pageSize.width - 10, 105);
        doc.line(10, 115, doc.internal.pageSize.width - 10, 115);
        doc.line(10, 125, doc.internal.pageSize.width - 10, 125);
        doc.line(10, 135, doc.internal.pageSize.width - 10, 135);
        doc.line(10, 145, doc.internal.pageSize.width - 10, 145);

        

        // Betaalinformatie
        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text("Betaalmethode", 10, 175);
        doc.setFontStyle("normal");
        doc.setFontSize(10);
        doc.text("Overschrijven naar bankrekening:", 10, 185);
        doc.text("NL12 BANK 3456 7890 12", 10, 195);

        // Professionele tekst
        doc.setFontSize(10);
        doc.setFontStyle("italic");
        doc.text("Gelieve het bedrag binnen 14 dagen over te maken.", doc.internal.pageSize.getWidth() / 2, 240, { align: "center" });
        doc.setFontStyle("bolditalic");
        doc.text("Bedankt voor uw zaken!", 10, 225);

        doc.save("factuur.pdf");
    }
}

