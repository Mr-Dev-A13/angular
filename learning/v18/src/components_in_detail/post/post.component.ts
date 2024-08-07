import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {Post} from "../c_in_d.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input() post?: Post;
  @Output() onRemovePost: EventEmitter<number> = new EventEmitter<number>();
  // Static default is false.
  @ContentChild("postInfoRef", {static: true}) postInfoRef?: ElementRef;


  removePost () {
    this.onRemovePost.emit(this.post?.id as number);
  }

  constructor() {
    console.log("===> Constructor");
  };

  ngOnChanges(): void {
    console.log("===> OnChanges");
  };

  ngOnInit(): void {
    console.log("===> OnInit");
  };

  ngDoCheck(): void {
    console.log("===> DoCheck");
  };

  ngAfterContentInit (): void {
    console.log("===> AfterContentInit");
  };

  ngAfterContentChecked (): void {
    console.log("===> AfterContentChecked");
  };

  ngAfterViewInit (): void {
    console.log("===> AfterViewInit");
  };

  ngAfterViewChecked (): void {
    console.log("===> AfterViewChecked");
  };

  ngOnDestroy (): void {
    console.log("===> Destroy");
  };


}
