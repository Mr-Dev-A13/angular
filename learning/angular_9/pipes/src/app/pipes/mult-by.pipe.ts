import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: "multiple",
})

export class MultipleByPipe implements PipeTransform {

transform(number: number, pow: number = 2): number {
      return number * pow;
    }
}
