import { useState } from "react";
import { ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandInput,
  CommandResponsiveDialog,
} from "./ui/command";

import { Button } from "./ui/button";

type Props = {
  value: string;
  className?: string;
  placeholder?: string;
  onSelect: (value: string) => void;
  onSearch?: (value: string) => void;
  options: Array<{
    id: string;
    value: string;
    children: React.ReactNode;
  }>;
};

export const CommandSelect = ({
  value,
  options,
  onSelect,
  onSearch,
  className,
  placeholder = "Select an option",
}: Props) => {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        type="button"
        variant="outline"
        className={cn(
          "h-9 justify-between font-normal px-2",
          !selectedOption && "text-muted-foreground",
          className
        )}
      >
        <div>{selectedOption?.children ?? placeholder}</div>
        <ChevronsUpDownIcon />
      </Button>
      <CommandResponsiveDialog
        open={open}
        onOpenChange={setOpen}
        shouldFilter={!onSearch}
      >
        <CommandInput placeholder="Search..." onValueChange={onSearch} />
        <CommandList>
          <CommandEmpty>
            <span className="text-muted-foreground text-sm">
              No options found.
            </span>
          </CommandEmpty>
          {options.map((option) => (
            <CommandItem
              key={option.id}
              className="cursor-pointer"
              onSelect={() => {
                onSelect(option.value);
                setOpen(false);
              }}
            >
              {option.children}
            </CommandItem>
          ))}
        </CommandList>
      </CommandResponsiveDialog>
    </>
  );
};
