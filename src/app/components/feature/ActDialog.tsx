"use client"

import React, { isValidElement, type ReactElement, type PropsWithChildren } from "react"

import { DialogProps } from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { twMerge } from "tailwind-merge"

import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export type ActDialogProps = PropsWithChildren<{ wrapperClassName?: string } & DialogProps>

const ActDialog = ({ children, wrapperClassName, ...rest }: ActDialogProps) => {
  const [trigger, content] = React.Children.toArray(children).reduce<[ReactElement | null, React.ReactNode]>(
    (acc, child) => {
      if (isValidElement(child) && child.type === ActDialogTrigger && acc[0] === null) {
        return [child, acc[1]]
      }
      return [acc[0], [...(acc[1] as any[]), child]]
    },
    [null, []]
  )

  return (
    <Dialog aria-describedby={undefined} {...rest}>
      {trigger}
      <DialogPortal>
        <DialogOverlay>
          <DialogContent aria-describedby={undefined} className={twMerge("outline-none", wrapperClassName)}>
            <VisuallyHidden>
              <DialogTitle />
            </VisuallyHidden>
            {content}
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  )
}

const ActDialogTrigger = ({ children }: PropsWithChildren) => <DialogTrigger asChild>{children}</DialogTrigger>

ActDialog.Trigger = ActDialogTrigger

export default ActDialog
