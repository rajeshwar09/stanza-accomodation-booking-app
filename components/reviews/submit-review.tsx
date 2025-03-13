"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import FormContainer from "../form/form-container";
import { createReviewAction } from "@/utils/actions";
import RatingInput from "../form/rating-input";
import TextAreaInput from "../form/text-area-input";
import SubmitButton from "../form/buttons";

type SubmitReviewProps = {
  propertyId: string;
};

const SumbitReview = ({ propertyId }: SubmitReviewProps) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

  return (
    <div className="mt-8">
      <Button onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        Leave a Review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-4 mt-4">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="propertyId" value={propertyId} />
            <RatingInput name="rating" />
            <TextAreaInput
              name="comment"
              labelText="Your thoughts"
              defaultValue="Amazing place!!!"
            />
            <SubmitButton text="Submit" className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};

export default SumbitReview;
