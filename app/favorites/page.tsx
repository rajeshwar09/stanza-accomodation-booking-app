import EmptyList from "@/components/home/empty-list";
import PropertiesList from "@/components/home/properties-list";
import { fetchFavorites } from "@/utils/actions";

const FavoritesPage = async () => {
  const favorites = await fetchFavorites();

  if (favorites.length === 0)
    return (
      <EmptyList
        heading="No Favorites!"
        message="Mark you favorites."
        btnText="Go to Home"
      />
    );

  return <PropertiesList properties={favorites} />;
};

export default FavoritesPage;
