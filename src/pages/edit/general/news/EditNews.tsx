import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/wrappers/typography/Text';
import { Input } from '@/components/wrappers/forms/input/Input';
import { useForm } from 'react-hook-form';

interface FormValues {}

export const EditNews = () => {
  const { control } = useForm<FormValues>();

  return (
    <div className="flex flex-col gap-4 bg-brand-3  border-1 rounded-md border-brand-300 p-4">
      <Text size="3xl" color="brand-100">
        Создание новости
      </Text>
      <Separator spacing="equalSmall" />
      <Input placeholder="Напишите название" name="name" control={control} />
      <Input
        message="Тут оно должно быть коротенькое!"
        placeholder="Короткое описание"
        name="short_description"
        control={control}
      />
      <Button variant="secondary">Сохранить</Button>
    </div>
  );
};
