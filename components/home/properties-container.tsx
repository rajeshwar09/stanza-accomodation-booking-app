import { fetchProperties } from "@/utils/actions";
import type { PropertyCardProps } from "@/utils/types";
import EmptyList from "./empty-list";
import PropertiesList from "./properties-list";

type PropertiesContainerProps = {
  category?: string;
  search?: string;
};

const PropertiesContainer = async ({
  category,
  search,
}: PropertiesContainerProps) => {
  const properties: PropertyCardProps[] = await fetchProperties({
    category: category,
    search: search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try chaning or removing some of filters."
        btnText="Clear Filters"
      />
    );
  }

  return <PropertiesList properties={properties} />;
};

export default PropertiesContainer;
