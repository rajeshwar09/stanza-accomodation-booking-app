"use client";
import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { LuShare2 } from "react-icons/lu";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type ShareButtonProps = {
  propertyId: string;
  name: string;
};

const ShareButton = ({ propertyId, name }: ShareButtonProps) => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/properties/${propertyId}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full"
      >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} title={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <WhatsappShareButton url={shareLink} title={name}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
