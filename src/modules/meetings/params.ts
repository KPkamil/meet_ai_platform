import {
  createLoader,
  parseAsString,
  parseAsInteger,
  parseAsStringEnum,
} from "nuqs/server";

import { DEFAULT_PAGE } from "@/constants";

import { MeetingStatus } from "./types";

export const filtersSearchParams = {
  status: parseAsStringEnum(Object.values(MeetingStatus)),
  search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  agentId: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  page: parseAsInteger
    .withDefault(DEFAULT_PAGE)
    .withOptions({ clearOnDefault: true }),
};

export const loadSearchParams = createLoader(filtersSearchParams);
