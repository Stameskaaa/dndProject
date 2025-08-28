import { Separator } from '@/components/ui/separator';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { Text } from '@/components/wrappers/typography/Text';
import type { Race } from '@/features/races/types';

export const RaceFeatures = ({ features }: { features?: Race['features'] }) => {
  if (!features) return null;

  const DescriptionItem = ({ title, description }: { title: string; description: String }) => (
    <div className="flex-1 flex items-start gap-1">
      <Text
        as="span"
        size="md"
        color="text-secondary"
        className='className="flex items-center gap-1 text-nowrap'>
        {title}:{' '}
      </Text>
      <Text as="span" size="md" color="text-muted">
        {description}
      </Text>
    </div>
  );

  const Description = () => (
    <div className="flex flex-col gap-2">
      <DescriptionItem title="Тип существа" description={features?.type} />
      <DescriptionItem title="Размер" description={features?.size} />
      <DescriptionItem title="Скорость" description={features?.speed} />
    </div>
  );
  return (
    <div>
      <Description />
      <Separator className="bg-brand-100 mb-[12px] mt-[22px]" />
      <MarkDownText>{features.md_content}</MarkDownText>
    </div>
  );
};
