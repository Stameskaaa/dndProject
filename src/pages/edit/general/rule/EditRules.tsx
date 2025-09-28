import { useForm } from 'react-hook-form';
import {
  useCreateRuleMutation,
  useDeleteRuleMutation,
  useGetRulesListQuery,
  useUpdateRuleMutation,
} from '@/features/rules/api';
import type { Rule } from '@/features/rules/types';
import { allTags, ruleOptions } from '@/features/rules/constant';
import { EditList } from '../../ui/EditItem';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditRules = () => {
  const {
    control,
    watch,
    resetField,
    getValues: getFormData,
    reset,
    handleSubmit,
  } = useForm<Rule>({
    defaultValues: {
      type: 'dnd',
    },
  });

  const selectedTag = watch('type');
  const tagList = allTags?.[selectedTag];

  function handleSave() {
    const { tags, ...rest } = getFormData();
    const newTags = Array.isArray(tags) ? tags : [tags || 'other'];
    return { ...rest, tags: newTags };
  }

  return (
    <EditList
      handleSubmit={handleSubmit}
      reset={reset}
      getValues={handleSave}
      queryHook={useGetRulesListQuery}
      createHook={useCreateRuleMutation}
      updateHook={useUpdateRuleMutation}
      removeHook={useDeleteRuleMutation}
      mapData={(data: Rule[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, title, shortDescription }) => ({
          id,
          title,
          description: shortDescription,
        }));
      }}>
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
        name="shortDescription"
        control={control}
      />
      <TextareaMD
        hasMd
        required
        control={control}
        message="Полное описание правила в формате Markdown"
        placeholder="Добавьте подробное описание (Markdown)"
        name="mdContent"
      />
    </EditList>
  );
};
