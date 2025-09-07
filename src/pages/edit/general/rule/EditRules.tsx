import { useForm } from 'react-hook-form';
import type { Rule } from '@/features/rules/types';
import { useCreateRuleMutation } from '@/features/rules/api';
import { allTags, ruleOptions } from '@/features/rules/constant';
import { Button } from '@/components/ui/button';
import { SelectRuleModal } from './SelectRuleModal';
import { Separator } from '@/components/ui/separator';
import { Text } from '@/components/wrappers/typography/Text';
import { Input } from '@/components/wrappers/forms/input/Input';
import { Selector } from '@/components/wrappers/forms/selector/Selector';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { TextareaMD } from '@/components/wrappers/forms/textarea/TextareaMD';

export const EditRules = () => {
  const { control, watch, getValues, resetField, handleSubmit } = useForm<
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
    const data = getValues();
    const tags = Array.isArray(data.tags) ? data.tags : [data.tags || 'other'];
    create({ ...data, tags });
  }

  return (
    <div className="flex flex-col bg-brand-3 border-1 rounded-md border-brand-300 p-4">
      <div className="flex gap-2 justify-between">
        <Text size="2xl" color="brand-100">
          {selectedRule
            ? `Редактирование правила - ${selectedRule.title || ''}`
            : 'Создание нового правила'}
        </Text>
        <ModalWindow contentClassname="w-[600px]" buttonTrigger={<Button>Выбрать правило</Button>}>
          <SelectRuleModal />
        </ModalWindow>
      </div>

      <Separator spacing="equalSmall" />

      <div className="flex flex-col gap-4">
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
          className="h-[240px]"
          hasMd
          required
          control={control}
          message="Полное описание правила в формате Markdown"
          placeholder="Добавьте подробное описание (Markdown)"
          name="md_content"
        />
        <Button onClick={handleSubmit(createRule)} variant="secondary">
          Сохранить
        </Button>
      </div>
    </div>
  );
};
