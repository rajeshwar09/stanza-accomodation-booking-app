"use client";
import { actionFunction } from "@/utils/types";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { LuUser } from "react-icons/lu";
import { Button } from "../ui/button";
import FormContainer from "./form-container";
import ImageInput from "./image-input";
import SubmitButton from "./buttons";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: ReactNode;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const userIcon = (
    <LuUser className="w-24 h-24 bg-primary rounded text-white mb-4" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded object-cover mb-4 w-24 h-24"
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>{props.children}
            <ImageInput />
            <SubmitButton size="sm" text="Submit" />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageInputContainer;
