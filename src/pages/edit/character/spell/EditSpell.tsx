import { useForm } from 'react-hook-form';
import { schoolList } from '@/mock/mock';
import type { Spell } from '@/features/spells/types';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import { EditList } from '../../ui/EditItem';
import {
  useCreateSpellMutation,
  useDeleteSpellMutation,
  useGetSpellsListQuery,
  useUpdateSpellMutation,
} from '@/features/spells/api';

export const EditSpell = () => {
  const { control, reset, getValues, handleSubmit } = useForm<Spell>();

  return (
    <EditList<Spell>
      handleSubmit={handleSubmit}
      reset={reset}
      getValues={getValues}
      queryHook={useGetSpellsListQuery}
      createHook={useCreateSpellMutation}
      updateHook={useUpdateSpellMutation}
      removeHook={useDeleteSpellMutation}
      mapData={(data: Spell[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, name, shortDescription }) => ({
          id,
          title: name,
          description: shortDescription,
        }));
      }}>
      <Input
        required
        placeholder="Огненный шар"
        message="Название заклинания"
        name="name"
        control={control}
      />

      <div className="flex gap-2 items-start">
        <Selector
          className="flex-2"
          placeholder="Волшебник, жрец, следопыт"
          message="Выберите классы"
          required
          multiple
          label="Классы"
          control={control}
          name="class_ids"
          options={schoolList.map(({ id, title }) => ({ id, value: title }))}
        />
        <Selector
          className="flex-1"
          placeholder="Заговор"
          message="Выберите уровень"
          required
          label="Уровни"
          control={control}
          name="level"
          options={Array.from({ length: 10 }).map((_, i) => ({
            id: `${i}`,
            value: `${i === 0 ? 'Заговор' : i}`,
          }))}
        />
        <Selector
          className="flex-1"
          placeholder="Воплощение"
          message="Выберите школу"
          required
          label="Школы"
          control={control}
          name="school_id"
          options={schoolList.map(({ id, title }) => ({ id, value: title }))}
        />
      </div>

      <div className="flex gap-2 items-start">
        <Input
          required
          placeholder="Действие"
          message="Время каста"
          name="casting_time"
          control={control}
        />
        <Input
          required
          placeholder="Мгновенное"
          message="Длительность"
          name="duration"
          control={control}
        />
      </div>
      <div className="flex gap-2 items-start">
        <Input
          required
          placeholder="120 футов"
          message="Дистанция"
          name="distance"
          control={control}
        />
        <Input
          required
          placeholder="В,C,М (Перо василиска)"
          message="Список компонентов"
          name="components_list"
          control={control}
        />
      </div>

      <Input
        required
        placeholder="Вы создаете маленький шарик огня и метаете его на выбранную точку. При попадании он взрывается сферой радиусом 5 футов."
        message="Короткое описание(на превью карточки, 1-2 предложения)"
        name="short_description"
        control={control}
      />

      <TextareaMD hasMd required control={control} message="Описание" name="md_description" />
    </EditList>
  );
};
