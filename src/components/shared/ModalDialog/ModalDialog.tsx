import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  type DialogRootProps,
} from '@/components/ui/dialog';
import { Text } from '../Typography/Text';
import type { ReactNode } from 'react';

interface ModalDialogProps {
  button?: ReactNode;
  rootProps?: DialogRootProps;
  children?: ReactNode;
}

export const ModalDialog: React.FC<ModalDialogProps> = ({ button, rootProps, children }) => {
  return (
    <Dialog {...rootProps}>
      {button && <DialogTrigger asChild>{button}</DialogTrigger>}
      <DialogContent className="bg-brand-200 border-none h-[60%] w-[35%] !max-w-none">
        <DialogHeader className="h-full">
          <DialogTitle>
            <Text size="3xl" gradient="blue-orange">
              Миша сын пидора
            </Text>
          </DialogTitle>
          <DialogDescription>
            <Text color="text-secondary" size="lg">
              Вы платите за полную хуйню не ведитесь на это
            </Text>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 overflow-auto h-full">{children}</div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
