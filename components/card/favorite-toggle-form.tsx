"use client";
import { toggleFavoriteAction } from "@/utils/actions";
import { usePathname } from "next/navigation";
import React from "react";
import FormContainer from "../form/form-container";
import { CardSubmitButton } from "../form/buttons";

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;
};

const FavoriteToggleForm = ({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) => {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
