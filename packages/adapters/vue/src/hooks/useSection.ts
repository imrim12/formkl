import { useSectionHandler } from "../handlers/useSectionHandler";

export const useSection = () => {
  const _handler = useSectionHandler();

  return {
    handler: _handler,
  };
};
