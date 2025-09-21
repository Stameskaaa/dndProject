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
          <Text className="mb-1" size="2xl" weight="bold" color="brand-100">
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
        <Text color="brand-100" style={{ fontWeight: 700 }} size="lg" as="span">
          {title}
        </Text>
      )}
      <Text className="text-text-secondary" as="span">
        {desc}
      </Text>
    </p>
  );
}
