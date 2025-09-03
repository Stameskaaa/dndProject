import type { Race } from '@/features/races/types';
import { Separator } from '@/components/ui/separator';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';

export const RaceFeatures = ({ features }: { features?: Race['features'] }) => {
  if (!features) return null;

  return (
    <div>
      <DescriptionList
        options={{ background: true }}
        data={[
          { title: 'Тип существа', value: features?.type },
          { title: 'Размер', value: features?.size },
          { title: 'Скорость', value: features?.speed },
        ]}
      />
      <Separator />
      <MarkDownText>{features.md_content}</MarkDownText>
    </div>
  );
};
