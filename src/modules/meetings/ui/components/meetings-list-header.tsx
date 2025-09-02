"use client";

import { useState } from "react";
import { PlusIcon, XCircleIcon } from "lucide-react";

import { DEFAULT_PAGE } from "@/constants";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { StatusFilter } from "./status-filter";
import { AgentIdFilter } from "./agent-id-filter";
import { NewMeetingsDialog } from "./new-meeting-dialog";
import { MeetingsSearchFilters } from "./meetings-search-filter";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";

export const MeetingsListHeader = () => {
  const [filters, setFilters] = useMeetingsFilters();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isAnyFilterModified =
    !!filters.status || !!filters.agentId || !!filters.search;

  const onClearFilters = () => {
    setFilters({
      search: "",
      agentId: "",
      status: null,
      page: DEFAULT_PAGE,
    });
  };

  return (
    <>
      <NewMeetingsDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="p-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My meetings</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            New meeting
          </Button>
        </div>
        <ScrollArea>
          <div className="flex items-center gap-x-2 p-1">
            <MeetingsSearchFilters />
            <StatusFilter />
            <AgentIdFilter />
            {isAnyFilterModified && (
              <Button variant="outline" onClick={onClearFilters}>
                <XCircleIcon className="size-4" />
                Clear
              </Button>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
