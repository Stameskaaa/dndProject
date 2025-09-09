import { useForm } from 'react-hook-form';
import { trait_types } from '@/mock/mock';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditTrait = () => {
  const { control, reset, handleSubmit } = useForm();

  return (
    <EditWrapper title={'Настройка черты'} saveAction={handleSubmit(() => {})} cancelAction={reset}>
      <div className="flex gap-2 items-start">
        <Input
          className="flex-1"
          required
          placeholder="Посвященный в магию"
          message="Название черты"
          name="name"
          control={control}
        />
        <Selector
          className="flex-1"
          placeholder="Происхождения"
          required
          message="Выберите тип черты"
          label="Черты"
          control={control}
          name="trait_type_id"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
      </div>

      <Selector
        placeholder="Долина Гурван-Гол"
        message="Выберите мир"
        required
        label="Миры"
        multiple
        control={control}
        name="world_ids"
        options={trait_types.map(({ id, name }) => ({ id, value: name }))}
      />

      <Input
        required
        message="Требования"
        placeholder="Значение силы выше 14"
        name="requirements"
        control={control}
      />

      <TextareaMD
        hasMd
        required
        control={control}
        message="Описание умения"
        name="md_description"
      />
    </EditWrapper>
  );
};
