import { Pencil, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/wrappers/typography/Text';
import { CubeLoader } from '@/components/wrappers/loaders/cubeLoader/CubeLoader';

interface EditableItem {
  id: number;
  title?: string;
  description?: string;
}

type ActionsType = (type: 'edit' | 'delete', id: number) => void;

export const EditList = ({
  data,
  actions,
  isLoading,
}: {
  data?: EditableItem[];
  actions: ActionsType;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <CubeLoader />;
  }

  if (!Array.isArray(data)) {
    return <Text>Произошла ошибка</Text>;
  }

  if (data?.length === 0) {
    return <Text>Данных нет</Text>;
  }

  return (
    <div className="flex flex-col gap-3">
      {data.map((data) => (
        <EditItem key={data.id} actions={actions} {...data} />
      ))}
    </div>
  );
};

export const EditItem = ({
  title,
  description,
  actions,
  id,
}: EditableItem & { actions: ActionsType }) => {
  return (
    <div className="flex justify-between gap-2 border-1 items-start border-brand-200 p-3 rounded-md">
      <div>
        <Text size="xl">
          Название:{` `}
          {title}
        </Text>
        <Text>
          {' '}
          Описание:{` `}
          {description}
        </Text>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => actions('edit', id)}>
          <Pencil />
        </Button>
        <Button onClick={() => actions('delete', id)}>
          <X />
        </Button>
      </div>
    </div>
  );
};
