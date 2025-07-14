import { CheckboxWithLabel } from "@/components/common/CheckboxWithLabel";
import { serviceFeatures } from "@/services/serviceFeatures";
import { ComponentProps, useEffect, useState } from "react";

export const useFeaturesOptions = () => {
  const [features, setFeatures] = useState<
    ComponentProps<typeof CheckboxWithLabel>[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    serviceFeatures
      .getAll()
      .then((data) =>
        setFeatures(data.map(({ name, id }) => ({ label: name, value: id, checked: false })))
      )
      .catch(() => {
        setFeatures([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { features, isLoading };
};
