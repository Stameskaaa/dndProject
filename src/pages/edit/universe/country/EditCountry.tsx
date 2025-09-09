import { useForm } from 'react-hook-form';
import { trait_types } from '@/mock/mock';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import type { Country } from '@/features/country/types';

export const EditCountry = () => {
  const { control, reset, handleSubmit } = useForm<Country>();

  return (
    <EditWrapper
      modalTriggerText="Открыть список стран"
      title={'Настройка стран'}
      saveAction={handleSubmit(() => {})}
      cancelAction={reset}>
      <Input
        required
        placeholder="Сенкриф"
        message="Название страны"
        name="name"
        control={control}
      />
      <div className="flex gap-2 items-start">
        <Selector
          className="flex-1"
          placeholder="Долина Гурван-Гол"
          message="Выберите мир"
          required
          label="Миры"
          control={control}
          name="world_id"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
        <Input
          required
          className="flex-1"
          message="Прикрепите фотографию"
          placeholder="https://image.png"
          name="src"
          control={control}
        />
      </div>

      <Selector
        className="flex-1"
        placeholder="Долина лунных орхидей"
        message="Выберите локации"
        required
        multiple
        label="Локации"
        control={control}
        name="location_ids"
        options={trait_types.map(({ id, name }) => ({ id, value: name }))}
      />

      <Input
        required
        placeholder="Теократические государство во главе которого правит Великий Синод"
        message="Короткое описание (1-2 предложения)"
        name="short_description"
        control={control}
      />

      <TextareaMD hasMd required control={control} message="Описание" name="md_description" />
    </EditWrapper>
  );
};
