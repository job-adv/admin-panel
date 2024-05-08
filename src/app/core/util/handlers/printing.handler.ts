import {Injectable} from "@angular/core";

@Injectable()
export class PrintingHandler {

  public print(data: Blob): void {
    const pdf = new Blob([data], {type: 'application/pdf'});
    const blobUrl = URL.createObjectURL(pdf);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = blobUrl;

    document.body.appendChild(iframe);

    // @ts-ignore
    iframe.contentWindow.print();
  }

  public open(data: BlobPart): void {
    const blob = new Blob([data], {type: 'application/pdf'});
    const fileURL = URL.createObjectURL(blob);
    window.open(fileURL, '_blank');
  }
}
