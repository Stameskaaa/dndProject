import { useForm } from 'react-hook-form';
import type { Rule } from '@/features/rules/types';
import { EditWrapper } from '../../ui/EditContainer';
import { useCreateRuleMutation } from '@/features/rules/api';
import { allTags, ruleOptions } from '@/features/rules/constant';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditRules = () => {
  const { control, watch, getValues, resetField, handleSubmit, reset } = useForm<
    Rule & { selected: Rule }
  >({
    defaultValues: {
      type: 'dnd',
    },
  });

  const [create] = useCreateRuleMutation();

  const selectedTag = watch('type');
  const selectedRule = watch('selected');
  const tagList = allTags?.[selectedTag];

  function createRule() {
    const { selected, tags, ...data } = getValues();
    const newTags = Array.isArray(tags) ? tags : [tags || 'other'];
    create({ ...data, tags: newTags });
  }

  return (
    <EditWrapper
      title={
        selectedRule
          ? `Редактирование правила - ${selectedRule.title || ''}`
          : 'Создание нового правила'
      }
      saveAction={handleSubmit(createRule)}
      cancelAction={reset}>
      <div className="flex gap-2 flex-wrap items-end">
        <Input
          className="w-auto flex-1 min-w-[260px]"
          required
          placeholder="Введите название правила"
          message="Название правила"
          name="title"
          control={control}
        />

        <Selector
          required
          onChangeAction={() => resetField('tags')}
          placeholder="Выберите тип правила"
          message="Тип правила (DnD, клубные или домашние)"
          control={control}
          name="type"
          options={ruleOptions}
        />

        <Selector
          message="Теги зависят от выбранного типа"
          required
          disabled={!tagList}
          multiple={selectedTag === 'dnd'}
          placeholder="Выберите тег"
          label="Теги"
          control={control}
          name="tags"
          options={tagList}
        />
      </div>
      <Input
        required
        message="Краткое описание (1–2 предложения, используется в превью)"
        placeholder="Введите короткое описание"
        name="short_description"
        control={control}
      />
      <TextareaMD
        hasMd
        required
        control={control}
        message="Полное описание правила в формате Markdown"
        placeholder="Добавьте подробное описание (Markdown)"
        name="md_content"
      />
    </EditWrapper>
  );
};
