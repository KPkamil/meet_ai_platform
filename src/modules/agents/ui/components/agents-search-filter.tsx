import { SearchIcon } from "lucide-react";

import { DEFAULT_PAGE } from "@/constants";
import { Input } from "@/components/ui/input";

import { useAgentsFilters } from "../../hooks/use-agents-filters";

export const AgentsSearchFilters = () => {
  const [filters, setFilters] = useAgentsFilters();

  return (
    <div className="relative">
      <Input
        value={filters.search}
        placeholder="Filter by name"
        className="h-9 bg-white w-[200px] pl-7"
        onChange={(e) =>
          setFilters({ search: e.target.value, page: DEFAULT_PAGE })
        }
      />
      <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};
