'use client'

import React, { isValidElement, ReactElement, PropsWithChildren } from "react"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { twMerge } from "tailwind-merge"

import {
  Sheet,
  SheetContent,
  SheetContentProps,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

export type ActSheetProps = {
  wrapperClassName?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
} & SheetContentProps

const ActSheet = ({ children, wrapperClassName, open, onOpenChange, ...rest }: PropsWithChildren<ActSheetProps>) => {
  const [trigger, content] = React.Children.toArray(children).reduce<[ReactElement | null, React.ReactNode]>(
    (acc, child) => {
      if (
        isValidElement(child) &&
        child.type === ActSheetTrigger &&
        acc[0] === null
      ) {
        return [child, acc[1]]
      }
      return [acc[0], [...(acc[1] as any[]), child]]
    },
    [null, []]
  )

  return (
    <Sheet aria-describedby={undefined} open={open} onOpenChange={onOpenChange}>
      {trigger}
      <SheetPortal>
        <SheetOverlay>
          <SheetContent {...rest} className={twMerge("outline-none", wrapperClassName)}>
            <VisuallyHidden>
              <SheetTitle />
            </VisuallyHidden>
            {content}
          </SheetContent>
        </SheetOverlay>
      </SheetPortal>
    </Sheet>
  )
}

const ActSheetTrigger = ({ children }: PropsWithChildren) => (
  <SheetTrigger asChild>{children}</SheetTrigger>
)

ActSheet.Trigger = ActSheetTrigger

export default ActSheet
