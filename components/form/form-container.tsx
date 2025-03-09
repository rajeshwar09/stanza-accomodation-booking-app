"use client"
import React, { ReactNode, useActionState, useEffect } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/types";

type FormProps = {
  action: actionFunction;
  children: ReactNode;
};

const initialState = {
  message: "",
};

const FormContainer = ({ action, children }: FormProps) => {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast("Message", { description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
