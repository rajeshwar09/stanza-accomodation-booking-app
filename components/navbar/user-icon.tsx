import { fetchProfileImage } from "@/utils/actions";
import { LuUser } from 'react-icons/lu';
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UserIcon = () => {
  const [profileImage, setProfileImage] = useState<string | null>();
  useEffect(() => {
    const getProfileImage = async () => {
      const image = await fetchProfileImage();
      setProfileImage(image);
    };

    getProfileImage();
  }, []);

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="Profile Icon"
        className="w-6 h-6 rounded-full object-cover" width={4} height={4}
      />
    );
  }

  return (
    <LuUser className="w-9 h-9 bg-primary rounded-full text-white" />
  );
};

export default UserIcon;
