import FavoriteToggleButton from "@/components/card/favorite-toggle-button";
import BreadCrumbs from "@/components/properties/bread-crumbs";
import ShareButton from "@/components/properties/share-button";
import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold">{property.tagline}</h1>
        <div className="flex items-center gap-x-4">
          <ShareButton propertyId={property.id} name={property.name} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
    </section>
  );
};

export default PropertyDetailsPage;
