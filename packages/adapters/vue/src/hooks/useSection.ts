import { useSectionHandler } from "../hooks/useSectionHandler";

export const useSection = () => {
  const _handler = useSectionHandler();

  return {
    handler: _handler,
  };
};
