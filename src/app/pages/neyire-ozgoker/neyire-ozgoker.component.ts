import { Component, OnInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-neyire-ozgoker',
  templateUrl: './neyire-ozgoker.component.html',
  styleUrls: ['./neyire-ozgoker.component.scss']
})
export class NeyireOzgokerComponent implements OnInit {
  location = window.location;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

downloadFile() {
  const link = this.renderer.createElement('a');
  link.setAttribute('target', '_blank');
  const vCardData ='BEGIN:VCARD\nVERSION:4.0\nFN:Neyire Özgöker\nN:Özgöker;Neyire;;;\nTEL;TYPE=voice:+905338689900\nTITLE:Sales Director\nURL:http://localhost:4200/neyire-ozgoker\nEND:VCARD'
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const vCardUrl = window.URL.createObjectURL(blob);
  link.setAttribute('href', vCardUrl);
  link.setAttribute('download', 'vcard.vcf');
  link.click();
  
  // Clean up by removing the created link and revoking the blob URL
  link.remove();
  window.URL.revokeObjectURL(vCardUrl);
}

}
