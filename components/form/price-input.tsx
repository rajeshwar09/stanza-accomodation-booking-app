import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
// import { Prisma } from "@prisma/client";

// const name = Prisma.PropertyScalarFieldEnum.price

type PriceInputProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: PriceInputProps) => {
  const name = "price";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize py-2">
        Price (₹)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 599}
        required
      />
    </div>
  );
};

export default PriceInput;
