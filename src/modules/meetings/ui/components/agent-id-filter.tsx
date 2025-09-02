import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
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
          variant="bottsNeutral"
          className="size-4"
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
      onSelect={(value) => setFilters({ agentId: value })}
    />
  );
};
