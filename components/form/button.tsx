"use client";

import { IoReload } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

const SubmitButton = ({ className = "", text = "", size = 'lg' }: SubmitButtonProps) => {
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

export default SubmitButton;
