"use client";

import { IoReload } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

const SubmitButton = ({ className = "", text = "" }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size="lg"
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
