import { useForm } from 'react-hook-form';
import {
  useCreateNewsMutation,
  useDeleteNewsMutation,
  useGetNewsListQuery,
  useUpdateNewsMutation,
} from '@/features/news/api';
import type { News } from '@/features/news/types';
import { EditList } from '../../ui/EditItem';
import { Input } from '@/components/wrappers/forms/input/Input';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditNews = () => {
  const { control, getValues, reset, handleSubmit } = useForm<News>({ shouldUnregister: true });

  return (
    <EditList
      reset={reset}
      handleSubmit={handleSubmit}
      getValues={getValues}
      queryHook={useGetNewsListQuery}
      createHook={useCreateNewsMutation}
      updateHook={useUpdateNewsMutation}
      removeHook={useDeleteNewsMutation}
      cancelAction={reset}
      mapData={(data: News[] | undefined) => {
        if (!data) return [];
        return data?.map(({ id, title, shortDescription }) => ({
          id,
          title,
          description: shortDescription,
        }));
      }}>
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
