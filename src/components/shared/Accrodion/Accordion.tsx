import {
  Accordion as AccWrapper,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { ReactNode } from 'react';
import { Text } from '../Typography/Text';

interface AccordionProps {
  title: string;
  content: ReactNode;
}

export const Accordion = ({ data }: { data: AccordionProps[] }) => {
  return (
    <AccWrapper type="single" collapsible className="w-full" defaultValue="item-0">
      {data.map(({ title, content }, i) => (
        <AccordionItem key={i} className="border-brand-200" value={`item-${i}`}>
          <AccordionTrigger className="hover:bg-brand-400 px-3 cursor-pointer">
            <Text size="lg" color="text-primary">
              {title}
            </Text>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-text-secondary px-3">
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccWrapper>
  );
};
