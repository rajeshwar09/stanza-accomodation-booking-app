import React from "react";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import SubmitButton from "@/components/form/button";
import { createProfileAction } from "@/utils/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfilePage = async () => {
  const user = await currentUser();
  if (user?.privateMetadata?.hasProfile) redirect('/')
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New user</h1>
      <div className=" flex justify-center items-center">

      <div className="border w-full p-8 rounded-md ">
        <FormContainer action={createProfileAction}>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="username" label="UserName" />
          </div>
          <SubmitButton text="Create Profile" className="mt-4" />
        </FormContainer>
      </div>
      </div>
    </section>
  );
};

export default CreateProfilePage;
