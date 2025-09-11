import { useForm } from 'react-hook-form';
import {
  useCreateRuleMutation,
  useDeleteRuleMutation,
  useGetRulesListQuery,
  useUpdateRuleMutation,
} from '@/features/rules/api';
import type { Rule } from '@/features/rules/types';
import { allTags, ruleOptions } from '@/features/rules/constant';
import { useEditableForm } from '../../hooks/useEditableItem';
import { EditList } from '../../ui/EditItem';
import { Button } from '@/components/ui/button';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditRules = () => {
  const { data, isLoading } = useGetRulesListQuery({ page: 3, limit: 3 });
  const { control, watch, resetField, handleSubmit, getValues, reset } = useForm<Rule>({
    defaultValues: {
      type: 'dnd',
    },
  });
  const [update, { isLoading: updateLoading }] = useUpdateRuleMutation();
  const [create, { isLoading: createLoading }] = useCreateRuleMutation();
  const [remove] = useDeleteRuleMutation();

  const selectedTag = watch('type');
  const tagList = allTags?.[selectedTag];

  function handleSave() {
    const { tags, ...rest } = getValues();
    const newTags = Array.isArray(tags) ? tags : [tags || 'other'];
    return { ...rest, tags: newTags };
  }

  const { open, setOpen, actions, submitAction, loadDeletedId } = useEditableForm<Rule>({
    reset,
    getData: handleSave,
    create,
    update,
    remove,
    data,
  });

  return (
    <div className="flex flex-col bg-brand-3 border-1 rounded-md border-brand-300 p-4 gap-3">
      <Button onClick={() => setOpen(true)}>Создать новую новость</Button>
      <EditList
        loadDeletedId={loadDeletedId}
        isLoading={isLoading}
        actions={actions}
        data={data?.map(({ id, title, shortDescription }) => ({
          id,
          title,
          description: shortDescription,
        }))}
      />
      <EditWrapper
        isLoading={updateLoading || createLoading}
        setOpen={setOpen}
        open={open}
        title={'Создание нового правила'}
        submitAction={handleSubmit(submitAction)}
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
      </EditWrapper>
    </div>
  );
};
