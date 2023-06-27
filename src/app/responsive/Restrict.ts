import { AbstractControl, ValidatorFn } from "@angular/forms";

export function customval():ValidatorFn{
    return (control:AbstractControl):{[key:string]:boolean}|null=>{
        if(control.value.trim()=="subi")
        {
            return {'NameNotAllowed':true}
        }
        return null
    }
    

}