import { Button } from "@/components/ui/button";

import { openDialog } from "./dialogService";
import { DialogProvider } from "./DialogProvider";
import { dialogRegistry } from "./demo/Async";

const Demo = () => {

  return (
    <div className="space-y-3">
      <Button onClick={() => openDialog('Rule')}>打开弹窗</Button>
      <DialogProvider registry={dialogRegistry} />
    </div>
  );
};

export default Demo;
