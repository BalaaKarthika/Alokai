import { SfInput, SfButton, SfSelect } from '@storefront-ui/react';
import { useState, ChangeEvent, FormEventHandler } from 'react';

export default function Contactform() {
  const [invalid, setInvalid] = useState(true);
  const options = [1, 7, 20, 27, 30, 30, 31, 32, 91, 34, 36, 39, 40, 41, 47, 48, 49, 51];
  const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleValidation = (event) =>
  emailRegExp.test(event?.target.value) ? setInvalid(false) : setInvalid(true);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
  };

  return (
    <form className="flex flex-col gap-y-4 text-neutral-900" onSubmit={onSubmit}>
      <h3 className="font-bold typography-headline-4 md:typography-headline-3">Contact information</h3>
      <div className="gap-y-0.5">
        <label className="gap-y-0.5">
          <span className="text-sm font-medium">Email</span>
          <SfInput
            name="email"
            onChange={handleValidation}
            placeholder="email address"
            invalid={invalid}
            autoComplete="email"
          />
        </label>
        {invalid && (
          <div>
            <p className="typography-error-sm  text-negative-700 font-medium mt-0.5">Please provide a valid email</p>
          </div>
        )}
      </div>
      <label className="flex flex-col gap-y-0.5">
        <span className="font-medium typography-text-sm">Phone number</span>
        <div className="flex">
          <SfSelect name="phone-country-code" className="w-16 mr-4" placeholder="--" autoComplete="tel-country-code">
            {options.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </SfSelect>
          <SfInput
            name="phone-national"
            wrapperClassName="w-full"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
          />
        </div>
      </label>
      <div className="flex justify-between gap-4 md:justify-end">
        <SfButton className="w-full md:w-auto" type="reset" variant="secondary">
          Clear all
        </SfButton>
        <SfButton className="w-full md:w-auto" type="submit">
          Save
        </SfButton>
      </div>
    </form>
  );
}
