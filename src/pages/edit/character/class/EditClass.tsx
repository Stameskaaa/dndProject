import { useForm } from 'react-hook-form';
import {
  useCreateGodMutation,
  useDeleteGodMutation,
  useGetGodListQuery,
  useUpdateGodMutation,
} from '@/features/gods/api';
import { God } from '@/features/gods/types';
import { EditList } from '../../ui/EditItem';
import { Input } from '@/components/wrappers/forms/input/Input';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { armors, characteristic, dice_hits, trait_types } from '@/mock/mock';

export const EditClass = () => {
  const { control, reset, handleSubmit, getValues } = useForm<God>();

  return (
    <EditList
      handleSubmit={handleSubmit}
      reset={reset}
      getValues={getValues}
      queryHook={useGetGodListQuery}
      createHook={useCreateGodMutation}
      updateHook={useUpdateGodMutation}
      removeHook={useDeleteGodMutation}
      mapData={(data: God[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, name, shortDescription }) => ({
          id,
          title: name,
          description: shortDescription,
        }));
      }}>
      <Input required message="Название класса" placeholder="Воин" name="name" control={control} />

      <div className="flex gap-2 items-start">
        <Selector
          className="flex-1"
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
          className="flex-1"
          message="Прикрепите фотографию"
          placeholder="https://image.png"
          name="src"
          control={control}
        />
      </div>
      <Selector
        className="flex-1"
        placeholder="к10"
        message="Кость хитов"
        required
        label="Варианты костей хитов"
        control={control}
        name="dice_hit"
        options={dice_hits}
      />
      <div className="flex gap-2 items-start">
        <Selector
          message="Выберите основные характеристики класса"
          required
          placeholder="Сила, ловкость"
          label="Характеристики"
          control={control}
          multiple
          name={'characteristic_ids'}
          options={characteristic.map(({ id, name }) => ({ id, value: name }))}
        />
        <Selector
          message="Выберите какими спасбросками владеет"
          required
          placeholder="Интеллекст, харизма"
          label="Характеристики"
          control={control}
          multiple
          name={'saving_throws'}
          options={characteristic.map(({ id, name }) => ({ id, value: name }))}
        />
      </div>
      <Input
        required
        message="Укажи выбор навыков"
        placeholder="Выберите из следующего списка: Атлетика, акробатика"
        name="skills"
        control={control}
      />
      <div className="flex gap-2 items-start">
        <Selector
          required
          message="Выберите типы доспехов"
          placeholder="Тяжелые"
          label="Доспехи"
          control={control}
          multiple
          name={'armor_id'}
          options={armors.map(({ id, name }) => ({ id, value: name }))}
        />
        <Input
          required
          message="Опишите каким оружием владеет"
          placeholder="Простое оружие, воинское оружие, клинки тиссаж"
          name="weapon_skills"
          control={control}
        />
      </div>

      <Input
        className="flex-1"
        placeholder="Инструменты стеклодува, воровские инструменты"
        message="Владение инструментами"
        name="tool_skills"
        control={control}
      />

      <div className="flex gap-2">
        <Input
          className="w-auto flex-1 min-w-[260px]"
          required
          message="Снаряжение - А"
          placeholder="Кольчуга, кинжал"
          name="start_equipment.0"
          control={control}
        />
        <Input
          className="w-auto flex-1 min-w-[260px]"
          required
          message="Снаряжение - Б"
          placeholder="Проклепанный кожанный доспех, рапира"
          name="start_equipment.1"
          control={control}
        />
      </div>
      <TextareaMD required message="Таблица персонажа" control={control} name="md_table_data" />
      <TextareaMD
        required
        message="Полное описание умений класса"
        name="md_description"
        control={control}
      />

      {/* TODO ДОБАВИТЬ МОДАЛКУ С выбором подлкассов */}
    </EditList>
  );
};
