import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Rating from "./rating";
import Comment from "./comment";
import Image from "next/image";

type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    name: string;
    image: string;
  };
  children?: ReactNode;
};

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={reviewInfo.image}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
            height={10}
            width={10}
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold capitalize mb-1">
              {reviewInfo.name}
            </h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      {/* delete button */}
      <div className="absolute top-3 right-3">
        {children}
      </div>
    </Card>
  );
};

export default ReviewCard;
