"use client";

import { useState } from "react";
import { PlusIcon, XCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { NewMeetingsDialog } from "./new-meeting-dialog";

export const MeetingsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
        <div className="flex items-center gap-x-2 p-1">
          <Button onClick={() => {}} variant="outline" size="sm">
            <XCircleIcon />
            TODO: Filters
          </Button>
        </div>
      </div>
    </>
  );
};
