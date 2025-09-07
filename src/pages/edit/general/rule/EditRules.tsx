import { useForm } from 'react-hook-form';
import type { Rule } from '@/features/rules/types';
import { useCreateRuleMutation } from '@/features/rules/api';
import { allTags, ruleOptions } from '@/features/rules/constant';
import { Button } from '@/components/ui/button';
import { SelectRuleModal } from './SelectRuleModal';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/wrappers/typography/Text';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';

export const EditRules = () => {
  const { control, watch, getValues, resetField, handleSubmit } = useForm<Rule>({
    defaultValues: {
      type: 'dnd',
    },
  });

  const [create] = useCreateRuleMutation();

  const selectedTag = watch('type');
  const tagList = allTags?.[selectedTag];

  function createRule() {
    const data = getValues();
    const tags = Array.isArray(data.tags) ? data.tags : [data.tags || 'other'];
    create({ ...data, tags });
  }

  return (
    <div className="flex flex-col gap-4 bg-brand-3  border-1 rounded-md border-brand-300 p-4">
      <Text size="3xl" color="brand-100">
        Создание правила (Выберите, чтобы изменить текущее)
      </Text>
      <ModalWindow
        contentClassname="w-[600px]"
        buttonTrigger={<Button>Редактировать существующее</Button>}>
        <SelectRuleModal />
      </ModalWindow>
      <Separator spacing="equalSmall" />
      <div className="flex gap-1 flex-wrap">
        <Input
          className="w-auto flex-1 min-w-[260px]"
          required
          placeholder="Напишите название"
          name="title"
          control={control}
        />
        <Selector
          required
          onChangeAction={() => resetField('tags')}
          placeholder="Выберите тип"
          label="Типы"
          control={control}
          name="type"
          options={ruleOptions}
        />

        <Selector
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
        message="Тут оно должно быть коротенькое!"
        placeholder="Короткое описание"
        name="short_description"
        control={control}
      />
      <Textarea
        className="h-[240px]"
        hasMd
        required
        control={control}
        message="Ттут опичная описунька"
        placeholder="Добавте описание(md)"
        name="md_content"
      />

      <Button onClick={handleSubmit(createRule)} variant="secondary">
        Сохранить
      </Button>
    </div>
  );
};
// <div className="flex flex-col gap-4 bg-brand-3  border-1 rounded-md border-brand-300 p-4">
//   <Text size="3xl" color="brand-100">
//     Создание новости
//   </Text>
//   <Separator spacing="equalSmall" />
//   <Input placeholder="Напишите название" name="name" control={control} />
//   <Input
//     message="Тут оно должно быть коротенькое!"
//     placeholder="Короткое описание"
//     name="short_description"
//     control={control}
//   />
//   <Button variant="secondary">Сохранить</Button>
// </div>

// <div className="flex flex-col gap-4 bg-brand-3  border-1 rounded-md border-brand-300 p-4">
//   <Text size="3xl" color="brand-100">
//     Создание черты
//   </Text>
//   <Separator spacing="equalSmall" />
//   <Input placeholder="Напишите название" name="name" control={control} />
//   <Selector
//     placeholder="Выберите тип черты"
//     label="Типы"
//     control={control}
//     name="type"
//     options={ruleOptions}
//   />
//   <Input placeholder="Напишите требрование" name="name" control={control} />

//   <Textarea
//     control={control}
//     message="MD"
//     placeholder="Добавте описание(md)"
//     name="md_content"
//   />
//   <Selector
//     placeholder="Выберите миры, к которым будут привязаны эти черты"
//     label="Типы"
//     control={control}
//     name="type"
//     options={ruleOptions}
//   />
//   <Button variant="secondary">Сохранить</Button>
// </div>

// <div className="flex flex-col gap-4 bg-brand-3  border-1 rounded-md border-brand-300 p-4">
//   <Text size="3xl" color="brand-100">
//     Создание Характеристики
//   </Text>
//   <Separator spacing="equalSmall" />
//   <Input placeholder="Напишите название" name="name" control={control} />
//   <Input placeholder="Напишите описание" name="name" control={control} />
//   {/* TODO узнать пределы характеристик */}
//   {/* <Selector
//     placeholder="Выберите характеристику и значение"
//     label="Типы"
//     control={control}
//     name="type"
//     options={}
//   /> */}
//   <Button variant="secondary">Сохранить</Button>
// </div>

// <div className="flex flex-col gap-4 bg-brand-3  border-1 rounded-md border-brand-300 p-4">
//   <Text size="3xl" color="brand-100">
//     Создание Расы(Вида)
//   </Text>
//   <Separator spacing="equalSmall" />
//   <Input placeholder="Напишите название" name="name" control={control} />
//   <Input placeholder="Вставьте ссылку на изображение" name="name" control={control} />
//   <Textarea
//     control={control}
//     message="MD"
//     placeholder="Добавте описание(md)"
//     name="md_content"
//   />

//   <div className='"flex flex-col gap-4 bg-brand-4'>
//     <Text size="3xl" color="brand-100">
//       особенности вида
//     </Text>
//     <Input placeholder="Тип" name="name" control={control} />
//     <Input placeholder="Размер(тут селект)" name="name" control={control} />
//     <Input placeholder="Скорость" name="name" control={control} />
//     <Textarea
//       control={control}
//       message="Доп инфа"
//       placeholder="быстро бегает, классно прыгает"
//       name="md_content"
//     />
//   </div>

//   <Textarea control={control} message="MD" placeholder="История" name="md_content" />

//   <Selector
//     placeholder="Подвяжите миры"
//     label="Типы"
//     control={control}
//     name="type"
//     options={ruleOptions}
//   />
//   {/* TODO узнать пределы характеристик */}
//   {/* <Selector
//     placeholder="Выберите характеристику и значение"
//     label="Типы"
//     control={control}
//     name="type"
//     options={}
//   /> */}
//   <Button variant="secondary">Сохранить</Button>
// </div>
