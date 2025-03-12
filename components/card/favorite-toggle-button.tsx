import { FaHeart } from "react-icons/fa6";
import { Button } from "../ui/button";

type FavoriteToggleButtonProps = {
  propertyId: string;
};

const FavoriteToggleButton = ({ propertyId }: FavoriteToggleButtonProps) => {
  return (
    <Button size='icon' variant='outline' className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
