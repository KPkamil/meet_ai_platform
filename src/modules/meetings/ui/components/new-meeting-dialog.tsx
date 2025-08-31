"use client";

import { useRouter } from "next/navigation";

import { ResponsiveDialog } from "@/components/responsive-dialog";

import { MeetingsForm } from "./meetings-form";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const NewMeetingsDialog = ({ open, onOpenChange }: Props) => {
  const router = useRouter();

  return (
    <ResponsiveDialog
      open={open}
      title="New meeting"
      onOpenChange={onOpenChange}
      description="Create a new meeting"
    >
      <MeetingsForm
        onCancel={() => onOpenChange(false)}
        onSuccess={(id) => {
          onOpenChange(false);
          router.push(`/meetings/${id}`);
        }}
      />
    </ResponsiveDialog>
  );
};
