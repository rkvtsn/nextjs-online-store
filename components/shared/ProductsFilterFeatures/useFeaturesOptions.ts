import { ComponentProps, useEffect, useState } from "react";
import { CheckboxWithLabel } from "@/components/common/CheckboxWithLabel";
import { serviceFeatures } from "@/services/serviceFeatures";

export const useFeaturesOptions = () => {
  const [features, setFeatures] = useState<
    ComponentProps<typeof CheckboxWithLabel>[]
  >([]);

  const [specialFeatures, setSpecialFeatures] = useState<
    ComponentProps<typeof CheckboxWithLabel>[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    serviceFeatures
      .getAll()
      .then((data) => {
        const basic = [];
        const specials = [];
        for (const feature of data) {
          const featureOption = {
            label: feature.name,
            value: `${feature.id}`,
            checked: false,
          };
          if (feature.price === null) {
            specials.push(featureOption);
          } else {
            basic.push(featureOption);
          }
        }

        setFeatures(basic);
        setSpecialFeatures(specials);
      })
      .catch(() => {
        setFeatures([]);
        setSpecialFeatures([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { features, specialFeatures, isLoading };
};
