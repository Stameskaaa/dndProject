import { useForm } from 'react-hook-form';
import {
  useCreateNewsMutation,
  useDeleteNewsMutation,
  useGetNewsListQuery,
  useUpdateNewsMutation,
} from '@/features/news/api';
import type { News } from '@/features/news/types';
import { EditList } from '../../ui/EditItem';
import { Button } from '@/components/ui/button';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';
import { useEditableForm } from '../../hooks/useEditableItem';

export const EditNews = () => {
  const { data, isLoading } = useGetNewsListQuery();
  const { control, getValues, reset } = useForm<News>({ shouldUnregister: true });
  const [remove] = useDeleteNewsMutation();
  const [update, { isLoading: updateLoading }] = useUpdateNewsMutation();
  const [create, { isLoading: createLoading }] = useCreateNewsMutation();

  const { open, setOpen, actions, submitAction, loadDeletedId } = useEditableForm<News>({
    reset,
    getData: getValues,
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
        title={'Редактирование новости'}
        submitAction={submitAction}
        cancelAction={reset}>
        <Input
          message="Название новости"
          placeholder="Украли кубики"
          name="title"
          control={control}
        />
        <Input
          message="Краткое описание (1–2 предложения, используется в превью)"
          placeholder="Краткое описание"
          name="shortDescription"
          control={control}
        />
        <TextareaMD
          control={control}
          name="mdDescription"
          placeholder="Напишите основной текст новости в формате Markdown"
        />
        <Input
          message="Ссылка на фото"
          placeholder="https://example.com/image.png"
          name="image"
          control={control}
        />
      </EditWrapper>
    </div>
  );
};
