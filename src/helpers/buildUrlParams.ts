import { ParamsUrl } from "../types/types";

export const buildUrlParams = (arg: ParamsUrl) => {
  let params = "";
  params += `&maxResults=${arg.maxResults}`;
  params += `&orderBy=${arg.orderBy}`;
  params += `&startIndex=${arg.startIndex}`;
  return params;
};
