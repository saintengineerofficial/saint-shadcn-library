import EventEmitter from "eventemitter3"

export const dialogBus = new EventEmitter<{
  open: (type: string, data?: any) => void
  close: () => void
}>()

export function openDialog(type: string, data?: any) {
  dialogBus.emit("open", type, data)
}

export function closeDialog() {
  dialogBus.emit("close")
}
