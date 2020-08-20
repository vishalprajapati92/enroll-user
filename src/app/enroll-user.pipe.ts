import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enrollUser'
})
export class EnrollUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? 
    value.filter((data,index) =>{
     if((data).name.toLowerCase().indexOf(args.toLowerCase())!=-1)  
     {
         return true;
     }     
  })
: value;
  }

}
