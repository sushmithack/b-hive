import { spaceListData } from "../data/spaceData";
import { SpaceData } from "../types/index";

export const fetchSpaceData = (): Promise<SpaceData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(spaceListData);
    }, 1000); 
  });
};
