import { ResponsiveDialog } from "@/components/responsive-dialog";

import { AgentForm } from "./agent-form";
import { AgentGetOne } from "../../types";

type Props = {
  open: boolean;
  initialValues: AgentGetOne;
  onOpenChange: (open: boolean) => void;
};

export const UpdateAgentDialog = ({
  open,
  onOpenChange,
  initialValues,
}: Props) => {
  return (
    <ResponsiveDialog
      open={open}
      title="Edit agent"
      onOpenChange={onOpenChange}
      description="Edit the agent details"
    >
      <AgentForm
        onCancel={() => onOpenChange(false)}
        onSuccess={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};
