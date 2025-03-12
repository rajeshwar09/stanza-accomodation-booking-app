import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./favorite-toggle-form";

type FavoriteToggleButtonProps = {
  propertyId: string;
};

const FavoriteToggleButton = async ({ propertyId }: FavoriteToggleButtonProps) => {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton />;

  const favoriteId = await fetchFavoriteId({propertyId})

  return (
    <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />
  );
};

export default FavoriteToggleButton;
