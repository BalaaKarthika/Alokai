import { SfSelect, SfInput, SfCheckbox, SfButton } from '@storefront-ui/react';
import { FormEventHandler, ChangeEvent, FocusEvent, useState } from 'react';
const countries = ['Germany', 'Great Britain', 'Poland', 'United States of America'];
const states = ['California', 'Florida', 'New York', 'Texas'];

export default function ShippingAddress() {
  const [streetIsValid, setStreetIsValid] = useState(true);

  const validateStreet = (e) => {
    setStreetIsValid(!!e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
  };

  return (
    <form className="p-4 flex gap-4 flex-wrap text-neutral-900" onSubmit={onSubmit}>
      <h2 className="w-full typography-headline-4 md:typography-headline-3 font-bold">Shipping address</h2>
      <label className="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
        <span className="typography-text-sm font-medium">First Name</span>
        <SfInput name="firstName" autoComplete="given-name" required />
      </label>
      <label className="w-full md:w-auto flex-grow flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">Last Name</span>
        <SfInput name="lastName" autoComplete="family-name" required />
      </label>
      <label className="w-full flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">Phone</span>
        <SfInput name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label className="w-full flex flex-col gap-0.5 flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">Country</span>
        <SfSelect name="country" placeholder="-- Select --" autoComplete="country-name" required>
          {countries.map((countryName) => (
            <option key={countryName}>{countryName}</option>
          ))}
        </SfSelect>
      </label>
      <div className="w-full md:w-auto flex-grow flex flex-col gap-0.5">
        <label>
          <span className="typography-text-sm font-medium">Street</span>
          <SfInput
            name="street"
            autoComplete="address-line1"
            className="mt-0.5"
            onBlur={validateStreet}
            onChange={validateStreet}
            required
            invalid={!streetIsValid}
          />
        </label>
        <div className="flex flex-colr mt-0.5">
          {!streetIsValid && (
            <strong className="typography-error-sm text-negative-700 font-medium">Please provide a street name</strong>
          )}
          <small className="typography-hint-xs text-neutral-500 mt-0.5">Street address or P.O. Box</small>
        </div>
      </div>
      <div className="w-full flex flex-col gap-0.5 md:w-[120px]">
        <label>
          <span className="typography-text-sm font-medium">Apt#, Suite, etc</span>
          <SfInput name="aptNo" className="mt-0.5" />
        </label>
        <small className="typography-hint-xs text-neutral-500 mt-0.5">Optional</small>
      </div>
      <label className="w-full flex flex-col gap-0.5">
        <span className="typography-text-sm font-medium">City</span>
        <SfInput name="city" autoComplete="address-level2" required />
      </label>
      <label className="w-full md:w-auto flex flex-col gap-0.5 flex-grow">
        <span className="typography-text-sm font-medium">State</span>
        <SfSelect name="state" placeholder="-- Select --" autoComplete="address-level1" required>
          {states.map((stateName) => (
            <option key={stateName}>{stateName}</option>
          ))}
        </SfSelect>
      </label>
      <label className="w-full flex flex-col gap-0.5 md:w-[120px]">
        <span className="typography-text-sm font-medium">ZIP Code</span>
        <SfInput name="zipCode" placeholder="eg. 12345" autoComplete="postal-code" required />
      </label>

      <div className="w-full flex gap-4 mt-4 md:mt-0 md:justify-end">
        <SfButton type="reset" variant="secondary" className="w-full md:w-auto">
          Clear all
        </SfButton>
        <SfButton type="submit" className="w-full md:w-auto">
          Save
        </SfButton>
      </div>
    </form>
  );
}
