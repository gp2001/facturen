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
  
  
  

