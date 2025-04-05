import { Directive, ElementRef, HostListener, Input,  SimpleChanges ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]',

})
export class HighlightDirective {
@Input() highlightText='';
@Input() highlightColor='';
orginalhtml='';

 constructor(private el:ElementRef , private renderer: Renderer2) { }


ngOnChanges(changes:SimpleChanges){

if(changes['highlightText'].firstChange){
this.orginalhtml=this.el.nativeElement.innerHTML;
return
}


const { currentValue} = changes['highlightText'];
console.log({currentValue})

if (currentValue) {
  const regExp = new RegExp(`(${currentValue})`, 'gi');
  const highlightedHTML = this.orginalhtml.replace(
    regExp,
    `<span style="background-color:${this.highlightColor}">$1</span>`
  );

  this.renderer.setProperty(this.el.nativeElement, 'innerHTML', highlightedHTML);
} else {
  this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.orginalhtml);
}




}





}
