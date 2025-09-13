import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { DEFAULT_PAGE } from "@/constants";
import { CommandSelect } from "@/components/command-select";
import { GeneratedAvatar } from "@/components/generated-avatar";

import { useMeetingsFilters } from "../../hooks/use-meetings-filters";

export const AgentIdFilter = () => {
  const [agentSearch, setAgentSearch] = useState("");
  const [filters, setFilters] = useMeetingsFilters();

  const trpc = useTRPC();

  const { data } = useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search: agentSearch,
    })
  );

  const commandOptions = (data?.items ?? []).map((agent) => ({
    id: agent.id,
    value: agent.id,
    children: (
      <div className="flex items-center gap-x-2">
        <GeneratedAvatar
          seed={agent.name}
          className="size-4"
          variant="botttsNeutral"
        />
        {agent.name}
      </div>
    ),
  }));

  return (
    <CommandSelect
      className="h-9"
      placeholder="Agent"
      options={commandOptions}
      onSearch={setAgentSearch}
      value={filters.agentId ?? ""}
      onSelect={(value) => setFilters({ agentId: value, page: DEFAULT_PAGE })}
    />
  );
};
