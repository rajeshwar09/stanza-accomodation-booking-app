import SubmitButton from "@/components/form/button";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInputContainer from "@/components/form/image-input-container";
import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from "@/utils/actions";

const ProfilePage = async () => {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.username}
          action={updateProfileImageAction}
          text="Update Profile Image"
        />
        <FormContainer action={updateProfileAction}>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <FormInput
              name={"firstName"}
              type={"text"}
              label="First Name"
              defaultValue={profile.firstName}
            />
            <FormInput
              name={"lastName"}
              type={"text"}
              label="Last Name"
              defaultValue={profile.lastName}
            />
            <FormInput
              name={"username"}
              type={"text"}
              label="User Name"
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text="Update Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default ProfilePage;
