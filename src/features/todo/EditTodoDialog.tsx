import { useState,useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react"

type EditTodoDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialText: string;
  onSave: (newText: string) => void;
};

export const EditTodoDialog = ({open,onOpenChange,initialText,onSave}: EditTodoDialogProps) => {

  const [editText, setEditText] = useState<string>("");  
  const [error, setError] = useState("");
    
  useEffect(() => {
      if (open) {
      setEditText(initialText);
      setError("");
    }
  }, [open, initialText]);
  
  const dialogSaveClick = () => {
    if (editText.trim() === "") {
      setError("Todoは空にできません");
      return;
    }
    onSave(editText.trim());
    onOpenChange(false);
  };
  return(
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>登録内容を編集</DialogHeader>
          {error && (
            <Alert variant="destructive" className="text-base">
              <AlertTitle className="flex items-center gap-2"><AlertTriangle/>ERROR</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
          <DialogFooter>
            <Button onClick={dialogSaveClick}>保存する</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}