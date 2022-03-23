import { DatePipe } from '@angular/common';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {
@Input() liste:any;
  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  constructor(
    private datepipe: DatePipe,
  ) { 
  }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }
  export(){
    this.modifyPdf();
  }
  async modifyPdf() {
    // Fetch an existing PDF document
    // console.log("data pdf form11", data);
    let url;
    if (location.host.includes("localhost"))
      url = "http://" + location.host + "/assets/DateMvtk.pdf";
    else
      url = "https://" + location.host + "/compliance/assets/template/Form1111.pdf";
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());
    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Embed the Helvetica font
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const secondPage = pages[1];
    const thirdPage = pages[2];
    const fourthPage = pages[3];
    const fifthPage = pages[4];
    const sixthPage = pages[5];
    const sevenPage = pages[6];
    const eightPage = pages[7];
    const ninePage = pages[8];
    const tenPage = pages[9];
    const elevenPage = pages[10];
    const twelvePage = pages[11];
    const thirteenPage = pages[12];
    // console.log(data);

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize();
    let heit=280;
   this.liste.forEach((element:any)=>{
    let dat=this.datepipe.transform(
      element.dateMvt,
      "dd/MM/yyyy"
    )
    this.printText(firstPage,dat, helveticaFont, 100, height / 2 + heit );
    this.printText(firstPage,element.article.codeArticle.toString(), helveticaFont, 190, height / 2 + heit );
    this.printText(firstPage,element.quantite.toString(), helveticaFont, 300, height / 2 + heit );
    this.printText(firstPage,element.typeMvt, helveticaFont, 360, height / 2 + heit );
    this.printText(firstPage,element.sourceMvt, helveticaFont, 440, height / 2 + heit );
   heit = heit-30;
   // this.printText(firstPage,this.liste[1].sourceMvt, helveticaFont, 440, height / 2 + 250 );

  })
  const pdfBytes = await pdfDoc.save();
  
  // this.FileToUpload.emit({
  //   name: url.split("/")[url.split("/").length - 1],
  //   pdfByte: pdfBytes
  // });
  // Trigger the browser to download the PDF document
  this.saveByteArray(url.split("/")[url.split("/").length - 1], pdfBytes);
}
saveByteArray(reportName:any, byte:any) {
  var blob = new Blob([byte], { type: "application/pdf" });
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  var fileName = reportName;
  link.download = fileName;
  link.click();
}
getPageText(pageNum:any, PDFDocumentInstance:any) {
  return new Promise(function (resolve, reject) {
    PDFDocumentInstance.getPage(pageNum).then(function (pdfPage:any) {
      pdfPage.getTextContent().then(function (textContent:any) {
        var textItems = textContent.items;
        var finalString = "";

        for (var i = 0; i < textItems.length; i++) {
          var item = textItems[i];

          finalString += item.str + " ";
        }

        resolve(finalString);
      });
    });
  });
}
printText(page:any, text:any, font:any, posx:any, posy:any) {
  page.drawText(text, {
    x: posx,
    y: posy,
    size: 10,
    font: font,
    color: rgb(0, 0, 0),
    rotate: degrees(0)
  });
}
}
