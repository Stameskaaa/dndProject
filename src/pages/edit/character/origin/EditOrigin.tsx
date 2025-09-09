import { useForm } from 'react-hook-form';
import { ruleOptions } from '@/features/rules/constant';
import { characteristic } from '@/mock/mock';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import { Selector } from '@/components/wrappers/forms/selector/Selector';

export const EditOrigin = () => {
  const { control, reset, handleSubmit } = useForm();

  return (
    <EditWrapper
      title={'Настройка происхождений'}
      saveAction={handleSubmit(() => {})}
      cancelAction={reset}>
      <Input
        className="w-auto flex-1 min-w-[260px]"
        required
        placeholder="Актер"
        message="Название происхождения"
        name="name"
        control={control}
      />
      <div className="flex gap-2 items-start">
        <Input
          className="flex-1"
          required
          message="Ссылка на фото"
          placeholder="https://example.com/image.png"
          name="src"
          control={control}
        />
        <Selector
          className="flex-1"
          placeholder="Долина Гурван-Гол"
          message="Выберите мир"
          required
          label="Миры"
          multiple
          control={control}
          name={'world_ids'}
          options={characteristic.map(({ id, name }) => ({ id, value: name }))}
        />
      </div>

      <Selector
        placeholder="Ловкость"
        message="Выберите характеристики"
        required
        label="Характеристики"
        control={control}
        multiple
        name={'characteristic_ids'}
        options={characteristic.map(({ id, name }) => ({ id, value: name }))}
      />

      <div className="flex gap-2">
        <Input
          className="flex-1"
          required
          placeholder="Акробатика, выступления"
          message="Впишите навыки, которыми владеет"
          name="skills"
          control={control}
        />
        <Input
          className="flex-1"
          required
          placeholder="Инструменты стеклодува, воровские инструменты"
          message="Владение инструментами"
          name="tool_skills"
          control={control}
        />
      </div>
      <Selector
        placeholder="Бдительный"
        required
        message="Выберите черту"
        label="Черты"
        control={control}
        name="trait_ids"
        options={ruleOptions}
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

      <TextareaMD
        hasMd
        required
        control={control}
        message="Корни происхождения, история и любые примечания"
        name="md_description"
      />
    </EditWrapper>
  );
};
