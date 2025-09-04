import {
  parseAsString,
  parseAsInteger,
  useQueryStates,
  parseAsStringEnum,
} from "nuqs";

import { DEFAULT_PAGE } from "@/constants";

import { MeetingStatus } from "../types";

export const useMeetingsFilters = () => {
  return useQueryStates({
    status: parseAsStringEnum(Object.values(MeetingStatus)),
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
    agentId: parseAsString
      .withDefault("")
      .withOptions({ clearOnDefault: true }),
    page: parseAsInteger
      .withDefault(DEFAULT_PAGE)
      .withOptions({ clearOnDefault: true }),
  });
};
