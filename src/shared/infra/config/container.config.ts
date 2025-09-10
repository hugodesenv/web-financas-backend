import { createContainer } from "awilix";

export const getContainer = () => {
  const container = createContainer({
    injectionMode: 'CLASSIC',
  });

  return container;
}