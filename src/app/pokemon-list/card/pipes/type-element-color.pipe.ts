import {Pipe, PipeTransform} from '@angular/core';
import {colors} from "../../../data/const";

@Pipe({
  name: 'typeElementColor',
  standalone: true,
})
export class TypeElementColorPipe implements PipeTransform {
  transform(key: keyof typeof colors): string {
    return colors[key] || colors.normal
  }

}
