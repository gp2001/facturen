function addProject() {
    var additionalProjects = document.getElementById('additionalProjects');
  
    var projectContainer = document.createElement('div');
    projectContainer.classList.add('additional-project-container');
  
    var projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.name = 'projectName[]';
    projectInput.required = true;
  
    var costInput = document.createElement('input');
    costInput.type = 'number';
    costInput.name = 'projectCost[]';
    costInput.required = true;
  
    var lineBreak = document.createElement('br');
    lineBreak.classList.add('additional-projects-linebreak');
  
    projectContainer.appendChild(projectInput);
    projectContainer.appendChild(document.createTextNode(' '));
    projectContainer.appendChild(costInput);
    projectContainer.appendChild(lineBreak);
  
    additionalProjects.appendChild(projectContainer);
  }
  
  document.getElementById('invoiceForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var customerName = document.getElementById('customerName').value;
    var customerAddress = document.getElementById('customerAddress').value;
    var customerCity = document.getElementById('customerCity').value;
    var customerCountry = document.getElementById('customerCountry').value;
    var projectNameElements = document.getElementsByName('projectName[]');
    var projectCostElements = document.getElementsByName('projectCost[]');
  
    var projectNames = [];
    var projectCosts = [];
  
    for (var i = 0; i < projectNameElements.length; i++) {
      projectNames.push(projectNameElements[i].value);
      projectCosts.push(projectCostElements[i].value);
    }
  
    // Hier kun je de gegevens verder verwerken, zoals het genereren van de factuur in PDF-formaat
    // Je kunt gebruikmaken van een PDF-generatielibrary zoals 'pdfkit' in combinatie met JavaScript of een server-side taal zoals Node.js of Python.
    generateInvoice(customerName, customerAddress, customerCity, customerCountry, projectNames, projectCosts, 'data:image/png;base64,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')
  });
  


function generateInvoice(customerName, customerAddress, customerCity, customerCountry, projectNames, projectCosts, logoImgData) {
    var doc = new jsPDF();
    doc.setFontSize(12);

    // Factuurnummer genereren
    var factuurID = generateInvoiceID();

    // Logo en gegevens
    doc.setFontStyle("bold");
    doc.text(factuurID, 10, 15); 
    doc.setFontStyle("normal");
    doc.setFontSize(10);
    doc.text(customerName, 10, 20);
    doc.text(customerAddress, 10, 25);
    doc.text(customerCity, 10, 30);
    doc.text(customerCountry, 10, 35);

    // Factuurnummer en datum
    doc.setFontSize(10);
    doc.text("Factuurdatum: " + new Date().toLocaleDateString(), 150, 15);
    var date = new Date();
    var expirationDate = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
    doc.text("Factuurvervaldatum: " + expirationDate.toLocaleDateString(), 150, 20);
    var currentDate = new Date();
    var expirationDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());

    // Logo
    doc.addImage(logoImgData, 'JPEG', 90, 10, 25, 25);

    // Factuurdetails
    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text("Factuurgegevens", 10, 60);

    // Omschrijving
    omschrijvingX = 10;
    omschrijvingY = 70;
    doc.setFontStyle("normal");
    doc.setFontSize(10);
    doc.text("Omschrijving", omschrijvingX, omschrijvingY);
    // BTW
    btwX = omschrijvingX + 115;
    btwY = 70;
    doc.text("BTW (21%)", btwX, btwY);
    // Bedragen
    bedragX = btwX + 40;
    bedragY = 70;
    doc.text("Totaal excl. BTW", bedragX, bedragY);

    var subtotal = 0, tax = 0, total = 0;
    for (var i = 0; i < projectNames.length; i++) {
        doc.line(10, 75 + (i * 10), doc.internal.pageSize.width - 10, 75 + (i * 10));
        var projectName = projectNames[i];
        var projectCost = parseFloat(projectCosts[i]);
        doc.setFontStyle("normal");
        doc.setFontSize(10);
        doc.text(projectName, 10, 80 + (i * 10));
        doc.text("\u20AC"+projectCost.toString(), bedragX, 80 + (i * 10));
        doc.text("\u20AC"+(projectCost * 0.21).toString(), btwX, 80 + (i * 10));
        subtotal += projectCost;
      }
    var tax = (subtotal * 0.21).toFixed(2);
    var total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

    doc.line(10, 75 + (projectNames.length * 10), doc.internal.pageSize.width - 10, 75 + (projectNames.length * 10));
    doc.text("Subtotaal", omschrijvingX+50, 80 + (projectNames.length * 10));
    doc.text("BTW 21%", omschrijvingX+80, 80 + (projectNames.length * 10));
    doc.text("Totaal incl. BTW", bedragX, 80 + (projectNames.length * 10));

    doc.text("\u20AC"+subtotal.toString(), omschrijvingX+50, 85 + (projectNames.length * 10));
    doc.text("\u20AC"+tax.toString(), omschrijvingX+80, 85 + (projectNames.length * 10));
    doc.setFontSize(25);
    doc.text("\u20AC"+total.toString(), bedragX, 90 + (projectNames.length * 10));

    // Professionele tekst
    doc.setFontSize(10);
    doc.setFontStyle("italic");
    doc.text("Gelieve het bedrag binnen 14 dagen over te maken onder vermelding van de factuurnummer (Zie linksboven).", doc.internal.pageSize.getWidth() / 2, 105 + (projectNames.length * 10), { align: "center" });
    doc.setFontStyle("bolditalic");
    doc.text("Bedankt voor uw zaken!", doc.internal.pageSize.getWidth() / 2, 110 + (projectNames.length * 10), { align: "center" });

    // Footer
    doc.setFontSize(10);
    doc.setFontStyle("normal");
    doc.text("Khais Tegelzetter", 10, 265); // Vervang 'Jouw bedrijfsnaam' door de naam van jouw bedrijf
    doc.text("F. Zernikestraat 249", 10, 270); // Vervang 'Jouw adres' door het adres van jouw bedrijf
    doc.text("7553EC Hengelo", 10, 275); // Vervang 'Jouw adres' door het adres van jouw bedrijf
    doc.text("Nederland", 10, 280); // Vervang 'Jouw adres' door het adres van jouw bedrijf

    doc.textWithLink("Tel: 0611863229", 75, 265, { url: "tel:0611863229" });
    doc.text("Email: m_24688@hotmail.com", 75, 270); // Vervang 'Jouw adres' door het adres van jouw bedrijf

    doc.text("KvK: 76427498", 150, 265); // Vervang 'Jouw adres' door het adres van jouw bedrijf
    doc.text("IBAN: NL77INGB0008807204", 150, 270); // Vervang 'Jouw adres' door het adres van jouw bedrijf
    doc.text("BIC: INGBNL2A", 150, 275); // Vervang 'Jouw adres' door het adres van jouw bedrijf

    //credit
    // Tekenen van de box
    doc.setFillColor(230, 230, 230); // Achtergrondkleur van de box
    doc.rect(10, 290, 190, 20, 'F'); // Positie en grootte van de box

    // Tekenen van de tekst met link
    doc.setTextColor(0, 0, 0); // Tekstkleur (zwart)
    doc.setFontSize(10); // Tekstgrootte
    doc.text("Deze facturering is mede mogelijk gemaakt door", 20, 295); // Tekst
    doc.setTextColor(0, 0, 255); // Tekstkleur (blauw)
    doc.textWithLink("Gabri\u00EBl", 165, 295, { url: "gp2001.github.io" }); // Klikbare link naar GitHub

    var pdfData = doc.output('bloburl');
    window.open(pdfData, '_blank');
    doc.save(factuurID+".pdf");
}

function generateInvoiceID() {
    // Genereer een unieke ID met jaartal en een willekeurige reeks tekens
    var year = new Date().getFullYear();
    var randomID = generateRandomID();
    var invoiceID = 'Factuur ' + year + '-' + randomID;
    
    return invoiceID;
  }
  
  // Functie voor het genereren van een willekeurige reeks tekens
  function generateRandomID(length) {
    // Definieer de gewenste lengte van de ID
    var length = length || 5;
    
    // Definieer de tekenset waaruit de ID wordt samengesteld
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    var result = '';
    
    // Genereer een willekeurig teken uit de tekenset en voeg het toe aan het resultaat
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    
    return result;
  }
  
  
  

