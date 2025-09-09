import { useForm } from 'react-hook-form';
import {
  condition_states,
  creature_sizes,
  creature_types,
  damage_states,
  trait_types,
} from '@/mock/mock';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import type { RaidBoss } from '@/features/raidbosses/types';
import { Text } from '@/components/wrappers/typography/Text';
import { CharacteristicForm } from '../../ui/CharacteristicForm';

export const EditRaidBoss = () => {
  const { control, reset, handleSubmit } = useForm<RaidBoss>();

  return (
    <EditWrapper
      modalTriggerText="Открыть список рейдбоссов"
      title={'Настройка рейдбоссов'}
      saveAction={handleSubmit(() => {})}
      cancelAction={reset}>
      <Input required placeholder="Тиамат" message="Имя существа" name="name" control={control} />
      <Input
        required
        className="flex-1"
        message="Прикрепите фотографию"
        placeholder="https://image.png"
        name="src"
        control={control}
      />
      <div className="flex gap-2 items-start">
        <Selector
          className="flex-1"
          placeholder="Долина Гурван-Гол"
          message="Выберите миры"
          required
          label="Миры"
          control={control}
          name="world_ids"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />
        <Selector
          className="flex-1"
          placeholder="Страна Сенкриф"
          message="Выберите страну"
          required
          multiple
          label="Страны"
          control={control}
          name="country_id"
          options={trait_types.map(({ id, name }) => ({ id, value: name }))}
        />

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
      </div>

      <div className="flex gap-2 flex-wrap">
        <div className="flex flex-col gap-2 flex-3 justify-start border border-brand-200 p-3 rounded-md">
          <Text color="brand-100" size="lg">
            Общие описания
          </Text>
          <Selector
            required
            message="Тип существа"
            label="Типы"
            placeholder="Гуманоид"
            name="features.type"
            control={control}
            options={creature_types}
          />
          <Selector
            required
            message="Размер"
            label="Размеры"
            placeholder="Средний"
            name="features.size"
            control={control}
            options={creature_sizes}
          />
          <Input
            required
            message="Скорость"
            placeholder="30 футов, лазая 20 футов"
            name="features.speed"
            control={control}
          />
          <Input
            required
            message="Чувства"
            placeholder="Темное зрение 60 футов, пассивное Восприятие 10"
            name="senses"
            control={control}
          />
          <Input
            required
            message="Язык"
            placeholder="Общий, эльфийский"
            name="language"
            control={control}
          />
          <Input
            required
            className="flex-1"
            message="Показатель опасности (ПО)"
            placeholder="от - 50 включительно ,если нет, то опасность отсутствует"
            name="challenge"
            control={control}
          />
        </div>

        <CharacteristicForm
          control={control}
          className="flex-1"
          name="characteristic"
          title="Характеристики"
        />

        <div className="flex flex-col flex-1 gap-2 justify-start border border-brand-200 p-3 rounded-md ">
          <Text color="brand-100" size="lg">
            Иммунитеты / Сопротивления
          </Text>
          <Selector
            message="Иммунитеты к урону"
            required
            placeholder="Огонь, холод"
            label="Характеристики"
            control={control}
            multiple
            name={'damage_immunities'}
            options={damage_states}
          />
          <Selector
            message="Резисты к урону"
            required
            placeholder="Огонь, холод"
            label="Характеристики"
            control={control}
            multiple
            name={'damage_resistance'}
            options={damage_states}
          />
          <Selector
            message="Иммунитеты к состояниям"
            required
            placeholder="Очарование, отравленный"
            label="Характеристики"
            control={control}
            multiple
            name={'condition_immunities'}
            options={condition_states}
          />
          <Selector
            message="Резисты к состояниям"
            required
            placeholder="Очарование, отравленный"
            label="Характеристики"
            control={control}
            multiple
            name={'condition_immunities'}
            options={condition_states}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 items-start  border border-brand-200 p-3 rounded-md">
        <Text color="brand-100" size="lg">
          Владения
        </Text>
        <div className="flex gap-2 items-end w-full">
          <Input
            required
            className="flex-2"
            message="Укажи выбор навыков"
            placeholder="Атлетика +8, акробатика  +20"
            name="skills"
            control={control}
          />
          <Input
            required
            className="flex-2"
            message="Укажи какими спасбросками владеет"
            placeholder="Сила +10, ловкость +1"
            name="saving_throws"
            control={control}
          />
          <Input
            required
            className="flex-1"
            message="Бонус мастерства"
            placeholder="2"
            name="proficiency_bonus"
            control={control}
          />
        </div>
      </div>

      <Input
        required
        placeholder="Владыка преисподней и величайшее зло"
        message="Короткое описание (1-2 предложения)"
        name="short_description"
        control={control}
      />

      <TextareaMD
        hasMd
        required
        control={control}
        message="Описание статблока"
        name="md_statblock"
      />

      <TextareaMD hasMd required control={control} message="Фан факты" name="md_fun_facts" />
      <TextareaMD hasMd required control={control} message="История" name="md_history" />

      <TextareaMD
        hasMd
        required
        control={control}
        message="Описание существа"
        name="md_description"
      />
    </EditWrapper>
  );
};
