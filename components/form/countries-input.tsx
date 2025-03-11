import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { formattedCountries } from "@/utils/countries";

type CountriesInputProps = {
  defaultValue?: string;
};

const name = "country";

const CountriesInput = ({ defaultValue }: CountriesInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize py-2">
        country
      </Label>
      <Select
        defaultValue={defaultValue || formattedCountries[0].code}
        name={name}
        required
      >
        <SelectTrigger id={name} className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent >
          {formattedCountries.map((country) => {
            return (
              <SelectItem key={country.code} value={country.code}>
                <span className="flex items-center gap-2">
                  {country.flag} {country.name}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CountriesInput;
