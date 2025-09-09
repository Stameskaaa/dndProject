import { useForm } from 'react-hook-form';
import type { News } from '@/features/news/types';
import { EditWrapper } from '../../ui/EditContainer';
import { Input } from '@/components/wrappers/forms/input/Input';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditNews = () => {
  const { control } = useForm<News>();

  return (
    <EditWrapper title={'Создание новости'} saveAction={() => {}} cancelAction={() => {}}>
      <Input
        message="Название новости"
        placeholder="Украли кубики"
        name="title"
        control={control}
      />
      <Input
        message="Краткое описание (1–2 предложения, используется в превью)"
        placeholder="Краткое описание"
        name="short_description"
        control={control}
      />
      <TextareaMD
        control={control}
        name="md_description"
        placeholder="Напишите основной текст новости в формате Markdown"
      />
      <Input
        message="Ссылка на фото"
        placeholder="https://example.com/image.png"
        name="image"
        control={control}
      />
    </EditWrapper>
  );
};
