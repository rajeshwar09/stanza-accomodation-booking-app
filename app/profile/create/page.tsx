import React from "react";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import SubmitButton from "@/components/form/button";

const createProfileAction = async (prevState: unknown, formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  if (firstName !== "Raje") return { message: "There was an error..." };
  return { message: "Profile Created" };
};

const CreateProfilePage = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <FormContainer action={createProfileAction}>
          <div className="grid gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="username" label="UserName" />
          </div>
          <SubmitButton text="Create Profile" className="mt-4" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfilePage;
