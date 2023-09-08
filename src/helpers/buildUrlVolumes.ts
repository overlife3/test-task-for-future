import { VolumesUrl } from "../types/types";

export const buildUrlVolumes = (arg: VolumesUrl) => {
  let volumes = "volumes?q=";
  if (arg.intitle) volumes += `intitle:${arg.intitle}`;
  if (arg.subject !== "all") volumes += `+subject:${arg.subject}`;
  return volumes;
};
