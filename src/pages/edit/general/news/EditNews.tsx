import { useForm } from 'react-hook-form';
import {
  useCreateNewsMutation,
  useDeleteNewsMutation,
  useGetNewsListQuery,
  useUpdateNewsMutation,
} from '@/features/news/api';
import type { News } from '@/features/news/types';
import { EditList } from '../../ui/EditItem';
import { usePagination } from '@/hooks/usePagination';
import { useEditableForm } from '../../hooks/useEditableItem';
import { Input } from '@/components/wrappers/forms/input/Input';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditNews = () => {
  const pagintaionData = usePagination();
  const { control, getValues, reset } = useForm<News>({ shouldUnregister: true });
  const [remove] = useDeleteNewsMutation();
  const [update, { isLoading: updateLoading }] = useUpdateNewsMutation();
  const [create, { isLoading: createLoading }] = useCreateNewsMutation();

  const { data, isLoading } = useGetNewsListQuery();
  const { open, setOpen, actions, submitAction, loadDeletedId, inputControl } =
    useEditableForm<News>({
      reset,
      getData: getValues,
      create,
      update,
      remove,
      data,
    });

  return (
    <EditList
      inputControl={inputControl}
      pagintaionData={pagintaionData}
      open={open}
      buttActionsLoading={updateLoading || createLoading}
      setOpen={setOpen}
      loadDeletedId={loadDeletedId}
      isLoading={isLoading}
      actions={actions}
      submitAction={submitAction}
      cancelAction={reset}
      data={data?.map(({ id, title, shortDescription }) => ({
        id,
        title,
        description: shortDescription,
      }))}>
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
    </EditList>
  );
};
