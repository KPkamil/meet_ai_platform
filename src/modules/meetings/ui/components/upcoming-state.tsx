import Link from "next/link";
import { BanIcon, VideoIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/empty-state";

type Props = {
  meetingId: string;
  isCanceling: boolean;
  onCancelMeeting: () => void;
};

export const UpcomingState = ({
  meetingId,
  isCanceling,
  onCancelMeeting,
}: Props) => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center">
      <EmptyState
        image="/upcoming.svg"
        title="Not started yet"
        description="Once you start this meeting, a summary will appear here"
      />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full">
        <Button
          onClick={onCancelMeeting}
          variant="secondary"
          disabled={isCanceling}
          className="w-full lg:w-auto"
        >
          <BanIcon />
          Cancel meeting
        </Button>
        <Button asChild className="w-full lg:w-auto" disabled={isCanceling}>
          <Link href={`/call/${meetingId}`}>
            <VideoIcon />
            Start meeting
          </Link>
        </Button>
      </div>
    </div>
  );
};
