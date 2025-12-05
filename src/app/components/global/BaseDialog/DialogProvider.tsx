'use client'
import React, { useEffect, useState } from "react";

import { DialogFrame } from "./DialogFrame";
import { closeDialog, dialogBus } from "./dialogService";

export interface DialogRegistry {
  [type: string]: React.ComponentType<any>;
}

type DialogProviderProps = {
  registry: DialogRegistry;
  className?: string;
};

export const DialogProvider = ({ registry, className }: DialogProviderProps) => {
  const [open, setOpen] = useState(false);
  const [contentType, setContentType] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const handleOpen = (t: string, d?: any) => {
      setContentType(t);
      setData(d);
      setOpen(true);
    };

    const handleClose = () => setOpen(false);

    dialogBus.on("open", handleOpen);
    dialogBus.on("close", handleClose);

    return () => {
      dialogBus.off("open", handleOpen);
      dialogBus.off("close", handleClose);
    };
  }, []);

  const Content = contentType ? registry[contentType] : null;

  return (
    <DialogFrame open={open} onClose={() => setOpen(false)} className={className}>
      {Content ? <Content {...data} onClose={closeDialog} /> : null}
    </DialogFrame>
  );
};
