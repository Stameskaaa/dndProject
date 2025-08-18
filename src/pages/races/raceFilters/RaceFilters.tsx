import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { Text } from '@/components/wrappers/typography/Text';

export const RaceFilters = () => {
  return (
    <ModalWindow button={<Button>фильтры</Button>}>
      <>
        <DialogHeader className="h-full">
          <DialogTitle>
            <Text size="3xl" gradient="blue-orange">
              Modal
            </Text>
          </DialogTitle>
          <DialogDescription>
            <Text color="text-secondary" size="lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem enim error
              odio. Praesentium nesciunt consectetur quaerat sit, saepe fugiat animi distinctio odio
              modi suscipit illo alias dicta porro enim ipsam!
            </Text>
          </DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 overflow-auto h-full">{children}</div> */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </>
    </ModalWindow>
  );
};
