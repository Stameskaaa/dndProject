import { useParams } from 'react-router-dom';
import { CubeLoader } from '../../loaders/cubeLoader/CubeLoader';
import { useGetSpellByIdQuery } from '@/features/spells/api';
import { Text } from '../../typography/Text';
import { ScrollArea } from '@/components/ui/scroll-area';

export const SpellModal = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSpellByIdQuery({ id: Number(id) }, { skip: !id });

  if (isLoading) {
    return <CubeLoader />;
  }

  if (isError || !data) {
    return <Text>Произошла ошибочка</Text>;
  }

  return (
    <div className="h-[400px]">
      <ScrollArea className="h-full w-full flex flex-col gap-4">
        {/* TODO доделать,  */}
        <div className="flex flex-col gap-1">
          <Text size="xl" weight="bold" color="brand-100">
            {data?.name}
          </Text>
          <Text size="sm" color="text-secondary">
            {data?.level === 0 ? 'Cantrip' : `Level ${data?.level}`} · {data?.school}
          </Text>
        </div>

        <div className="flex flex-col gap-1">
          <Text size="sm" color="text-primary">
            Время накладывания:{' '}
            <Text as="span" size="sm" color="text-muted">
              {data?.casting_time}
            </Text>
          </Text>
          <Text size="sm" color="text-primary">
            Дистанция:{' '}
            <Text as="span" size="sm" color="text-muted">
              {data?.range}
            </Text>
          </Text>
          {data?.components && (
            <Text size="sm" color="text-primary">
              Компоненты:{' '}
              <Text as="span" size="sm" color="text-muted">
                {Object.entries(data.components)
                  .filter(([_, v]) => v)
                  .map(([k]) => k)
                  .join(', ')}
              </Text>
            </Text>
          )}
          {data?.concentration && (
            <Text size="sm" color="text-secondary">
              🌀 Концентрация
            </Text>
          )}
          {data?.ritual && (
            <Text size="sm" color="text-secondary">
              📜 Ритуал
            </Text>
          )}
        </div>

        {data?.damage && (
          <div className="flex flex-col gap-1">
            <Text size="sm" color="text-primary">
              Урон:{' '}
              <Text as="span" size="sm" color="text-muted">
                {data.damage.dice} {data.damage.type}
              </Text>
            </Text>
            {data.area && (
              <Text size="sm" color="text-primary">
                Зона действия:{' '}
                <Text as="span" size="sm" color="text-muted">
                  {data.area}
                </Text>
              </Text>
            )}
            {data.higher_level_text && (
              <Text as="span" size="sm" color="text-muted">
                {data.higher_level_text}
              </Text>
            )}
          </div>
        )}

        <Text size="sm" color="text-secondary">
          {data?.full_description}
        </Text>

        {data?.examples && data.examples.length > 0 && (
          <div className="flex flex-col gap-1">
            <Text size="sm" weight="bold" color="text-primary">
              Примеры использования:
            </Text>
            {data?.examples.map((ex, idx) => (
              <Text as="span" size="sm" color="text-muted" key={idx}>
                • {ex}
              </Text>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-1">
          {data?.source && (
            <Text as="span" size="sm" color="text-muted">
              Источник: {data.source.book}, стр. {data.source.page}
            </Text>
          )}
          {data?.notes && (
            <Text as="span" size="sm" color="text-muted">
              Примечания: {data.notes}
            </Text>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
