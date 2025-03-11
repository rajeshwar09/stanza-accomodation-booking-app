import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { categories } from "@/utils/categories";

type CategoriesInputProps = {
  defaultValue?: string;
};

const name = "category";
const CategoriesInput = ({ defaultValue }: CategoriesInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize py-2">
        Categories
      </Label>
      <Select defaultValue={defaultValue || categories[0].label} name={name} required>
        <SelectTrigger id={name} className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => {
            return (
              <SelectItem key={category.label} value={category.label}>
                <span className="flex items-center gap-2 capitalize">
                  <category.icon /> {category.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoriesInput;
