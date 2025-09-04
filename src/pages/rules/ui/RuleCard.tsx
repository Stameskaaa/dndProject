import React from 'react';
import { Text } from '@/components/wrappers/typography/Text';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface RuleCardProps {
  title?: string;
  description?: string;
  full_description?: string;
}

export const RuleCard: React.FC<RuleCardProps> = ({ title, description, full_description }) => {
  return (
    <ModalWindow
      contentClassname="w-[calc(100%-40px)] h-[70%] max-h-[600px] !max-w-[600px]"
      buttonTrigger={
        <div className="cursor-pointer hover:bg-brand-300 active:bg-brand-300/70 duration-300 transition-colors h-[180px] p-3 rounded-xl ratio bg-brand-400  w-full flex flex-col gap-2">
          <Text color="brand-100" size="xl">
            {title}
          </Text>
          <Text color="text-description">{description}</Text>
        </div>
      }>
      <Action />
      <div className="flex flex-col h-full overflow-y-auto">
        <Text size="xl" className="mx-auto" as="span">
          {title}
        </Text>
        <Separator spacing="equalSmall" />
        <MarkDownText>{full_description}</MarkDownText>
      </div>
    </ModalWindow>
  );
};

const Action = ({ setOpen }: { setOpen?: (data: boolean) => void }) => {
  return (
    <Button
      size="icon"
      onClick={() => setOpen?.(false)}
      className="absolute right-0 m-2"
      variant="ghost">
      <X />
    </Button>
  );
};
