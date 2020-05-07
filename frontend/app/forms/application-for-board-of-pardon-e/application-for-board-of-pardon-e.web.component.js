import React from "react";
import TextInput from "../inputs/text-input.component.js";
import FormThatPrints from "../inputs/form-that-prints.component.js";
import Select from "../inputs/select.component.js";
import Section from "../inputs/section.component.js";

const paymentOptions = [
  {
    label: `Check, Money order, or Cashier's check  (Only to be filled out if application is mailed in. Check appropriate box for payment)`,
    value: "check"
  },
  { label: "Credit card (domestic only)", value: "creditCard" }
];

const creditCardOptions = [
  { label: "Visa", value: "visa" },
  { label: "Mastercard", value: "mastercard" },
  { label: "Discover", value: "discover" },
  { label: "American Express", value: "amex" }
];

export default function ApplicationForBoardOfPardonExpungement_Web({ data }) {
  return (
    <React.Fragment>
      <FormThatPrints>
        <Section name="1. Personal Information">
          <TextInput dataKey="person.firstName" label={__("first name")} />
          <TextInput dataKey="person.middleName" label={__("middle name")} />
          <TextInput dataKey="person.lastName" label={__("last name")} />
          <TextInput dataKey="person.birthday" label={__("birthday")} />
          <TextInput
            dataKey="person.previouslyUsedNames"
            label={__("previously used names")}
          />
          <TextInput dataKey="person.addressStreet" label={__("street")} />
          <TextInput dataKey="person.addressCity" label={__("city")} />
          <TextInput dataKey="person.addressState" label={__("state")} />
          <TextInput dataKey="person.addressZip" label={__("zip")} />
          <TextInput
            dataKey="person.socialSecurity"
            label={__("social security number")}
          />
          <TextInput
            dataKey="person.driversLicenseNumber"
            label={__("drivers license #")}
          />
          <TextInput
            dataKey="person.driversLicenseState"
            label={__("drivers license state")}
          />
        </Section>

        <Section name="3. Payment">
          <Select
            label="Payment method"
            dataKey="paymentMethod"
            options={paymentOptions}
          />
          {data.paymentMethod === "creditCard" && (
            <React.Fragment>
              <Select
                label="Card issuer"
                dataKey="creditCardIssuer"
                options={creditCardOptions}
              />
              <TextInput dataKey="cardNumber" label="Credit card number" />
              <TextInput dataKey="cardSecurityNumber" label="Security code" />
              <TextInput
                dataKey="cardExpirationMonth"
                label="Expiration month"
              />
              <TextInput dataKey="cardExpirationYear" label="Expiration year" />
              <TextInput dataKey="nameOnCard" label="Name on card" />
              <TextInput dataKey="cardZip" label="Card zip code" />
            </React.Fragment>
          )}
        </Section>
      </FormThatPrints>
    </React.Fragment>
  );
}
