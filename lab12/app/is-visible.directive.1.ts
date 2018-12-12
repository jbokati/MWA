import { Directive,ElementRef,Renderer2,Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit {
  @Input() appIsVisible:boolean;
  constructor(private element:ElementRef, private r: Renderer2) { 
    // r.setStyle(element.nativeElement,'display','none');
  }

  ngOnInit(){
    console.log("Is visible");
    console.log(this.appIsVisible);
    if(!this.appIsVisible){
        // this.element.nativeElement.hidden = true;
        this.r.setStyle(this.element.nativeElement,"display","none");
    }
  }

}
