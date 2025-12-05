"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { twMerge } from "tailwind-merge";

import { Dialog, DialogPortal, DialogOverlay, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type DialogFrameProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export const DialogFrame = ({ open, onClose, children, className }: DialogFrameProps) => {
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <DialogPortal>
        <DialogOverlay />
        <DialogContent aria-describedby={undefined} className={twMerge('outline-none', className)}>
          <VisuallyHidden>
            <DialogTitle />
          </VisuallyHidden>
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default DialogFrame;
