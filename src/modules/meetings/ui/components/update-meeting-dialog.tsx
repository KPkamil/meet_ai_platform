"use client";

import { ResponsiveDialog } from "@/components/responsive-dialog";

import { MeetingGetOne } from "../../types";
import { MeetingsForm } from "./meetings-form";

type Props = {
  open: boolean;
  initialValues: MeetingGetOne;
  onOpenChange: (open: boolean) => void;
};

export const UpdateMeetingsDialog = ({
  open,
  initialValues,
  onOpenChange,
}: Props) => {
  return (
    <ResponsiveDialog
      open={open}
      title="Edit meeting"
      onOpenChange={onOpenChange}
      description="Edit the meeting details"
    >
      <MeetingsForm
        initialValues={initialValues}
        onCancel={() => onOpenChange(false)}
        onSuccess={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};
