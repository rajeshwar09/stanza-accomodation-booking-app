import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) => {
  const tempDefaultDescription =
    "Nestled in the serene hills of Darjeeling, this charming wooden cabin offers stunning Himalayan views and a peaceful retreat. Enjoy crisp mountain air, a private balcony, and modern comforts, all just a short drive from town. Perfect for couples and nature lovers seeking relaxation and scenic beauty.";
  return (
    <div>
      <Label htmlFor={name} className="capitalize mb-2">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
};

export default TextAreaInput;
