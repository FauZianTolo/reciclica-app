import { FormBuilder, FormGroup } from "@angular/forms";
import { RegisterPageForm } from "./register.page.form";

describe('RegisterPageForm', () => {

  let registerPageForm: RegisterPageForm;
  let form: FormGroup;

  beforeEach(() => {
    registerPageForm = new RegisterPageForm(new FormBuilder());
    form = registerPageForm.getForm();
  })

  it('should empty name be invalid', () => {
    expect(form.get('name')?.valid).toBeFalsy();
  })

  it('should empty email be invalid', () => {
    expect(form.get('email')?.valid).toBeFalsy();
  })

  it('should empty password be invalid', () => {
    expect(form.get('password')?.valid).toBeFalsy();
  })

  it('should empty phone be invalid', () => {
    expect(form.get('phone')?.valid).toBeFalsy();
  })

  it('should empty address street be invalid', () => {
    expect(form.get('address')?.get('street')?.valid).toBeFalsy();
  })

  it('should empty address number be invalid', () => {
    expect(form.get('address')?.get('number')?.valid).toBeFalsy();
  })

  it('should empty address neighborhood be invalid', () => {
    expect(form.get('address')?.get('neigborhood')?.valid).toBeFalsy();
  })

  it('should empty address zip code be invalid', () => {
    expect(form.get('address')?.get('zipCode')?.valid).toBeFalsy();
  })

  it('should empty address state be invalid', () => {
    expect(form.get('address')?.get('state')?.valid).toBeFalsy();
  })

  it('should empty address city be invalid', () => {
    expect(form.get('address')?.get('city')?.valid).toBeFalsy();
  })

  it('should invalid email be invalid', () => {
    form.get('email')?.setValue('invalidEmail');
    expect(form.get('email')?.valid).toBeFalsy();
  })

  it('should password less than 7 character be invalid', () => {
    form.get('password')?.setValue('12345')

    expect(form.get('password')?.valid).toBeFalsy();
  })

  it('should password different from repeat password be invalid', () => {
    form.get('password')?.setValue('anyPassword')
    form.get('repeatPassword')?.setValue('anotherPassword')

    expect(form.get('repeatPassword')?.valid).toBeFalsy();
  })

  it('should form be invalid', () => {
    form.get('name')?.setValue("anyName");
    form.get('email')?.setValue("any@email.com");
    form.get('password')?.setValue("anyPassword");
    form.get('repeatPassword')?.setValue("anyPassword");
    form.get('phone')?.setValue("anyPhone");
    form.get('address')?.setValue("any street");
    form.get('address')?.setValue("any number");
    form.get('address')?.setValue("any complement");
    form.get('address')?.setValue("any neighborhood");
    form.get('address')?.setValue("any zip code");
    form.get('address')?.setValue("any city");
    form.get('address')?.setValue("any state");
    
    expect(form.valid).toBeTruthy();
  })
})
