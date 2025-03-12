"use client";

import { IoReload, IoReloadCircleOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { SignInButton } from "@clerk/nextjs";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export const SubmitButton = ({
  className = "",
  text = "",
  size = "lg",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size={size}
    >
      {pending ? (
        <>
          <IoReload /> Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export const CardSignInButton = () => {
  return (
    <SignInButton>
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="p-2 cursor-pointer"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button variant="outline">
      {pending ? (
        <IoReloadCircleOutline className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};
