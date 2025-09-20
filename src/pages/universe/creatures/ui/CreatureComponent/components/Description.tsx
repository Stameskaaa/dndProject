import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { Text } from '@/components/wrappers/typography/Text';

type DescriptionProps = {
  title?: string;
  desc?: string | number;
  variant?: 'block' | 'inline';
};

export function Description({ title, desc, variant = 'inline' }: DescriptionProps) {
  if (!desc) return null;

  if (variant === 'block') {
    return (
      <div>
        {title && (
          <Text size="2xl" className="mb-1" color="brand-100">
            {title}
          </Text>
        )}
        <MarkDownText>{String(desc)}</MarkDownText>
      </div>
    );
  }

  return (
    <p className="flex gap-2 items-center">
      {title && (
        <Text weight="bold" color="text-secondary" as="span">
          {title}
        </Text>
      )}
      <Text color="text-secondary" as="span">
        {desc}
      </Text>
    </p>
  );
}
