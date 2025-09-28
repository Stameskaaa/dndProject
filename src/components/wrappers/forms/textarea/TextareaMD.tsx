import classNames from 'classnames';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { Eye, EyeOff, FileOutput, Heart, MessageCircleQuestionMark } from 'lucide-react';
import cat from '../../../../assets/cat.webp';
import { Button } from '@/components/ui/button';
import { MotionText } from '../../typography/Text';
import { Textarea, type TextareaProps } from './Textarea';
import { MarkDownText } from '../../typography/MarkDownText';
import { SidePanel } from '../../modals/sidePanel/SidePanel';
import { ModalWindow } from '../../modals/modalWindow/ModalWindow';
import { ModalIndex, SidePanelIndex } from '@/constants/zIndex';

export const TextareaMD: React.FC<TextareaProps> = ({ control, name, className, ...props }) => {
  const {
    field: { onChange, value },
  } = useController({ control, name });
  const [isShowed, setIsShowed] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <Textarea
        className={classNames('h-[240px]', className)}
        control={control}
        name={name}
        actions={[
          <ModalWindow
            zIndex={ModalIndex + 2}
            key={1}
            contentClassname="h-[fit-content] overflow-hidden"
            buttonTrigger={
              <Button size="sm">
                <FileOutput />
              </Button>
            }>
            Место для вставки шаблонов
          </ModalWindow>,
          <Button size="sm" key={2} onClick={() => setIsShowed((prev) => !prev)}>
            {isShowed ? <Eye /> : <EyeOff />}
          </Button>,
          <SidePanel
            zIndex={ModalIndex + 2}
            key={3}
            buttonTrigger={
              <Button size="sm">
                <MessageCircleQuestionMark />
              </Button>
            }>
            <div className="w-full h-full overflow-y-auto p-4">
              <MDCrib />
            </div>
          </SidePanel>,
          <ModalWindow
            zIndex={ModalIndex + 2}
            key={4}
            contentClassname="h-[fit-content] overflow-hidden"
            buttonTrigger={
              <Button size="sm">
                <Heart />
              </Button>
            }>
            <motion.img
              animate={{ y: [400, 0], opacity: [0, 1], rotate: [0, 0, 360] }}
              transition={{ duration: 2, times: [0, 0.8, 1] }}
              src={cat}
            />
            <MotionText
              size="xl"
              className="absolute bottom-0 left-[180px]"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -200 }}
              transition={{ type: 'spring', duration: 0.6, delay: 2.2 }}>
              Ты лох
            </MotionText>

            <MotionText
              size="sm"
              className="absolute bottom-0 left-[30px]"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -160 }}
              transition={{ type: 'spring', duration: 0.6, delay: 3 }}>
              А Сюда не смотри
            </MotionText>
          </ModalWindow>,
        ]}
        {...props}
      />
      <AnimatePresence mode="wait">
        {isShowed && (
          <motion.div
            className="overflow-y-auto overscroll-contain border-1 rounded-md p-2 border-brand-200"
            layout
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}>
            <MarkDownText className="min-h-[300px] max-h-[500px]">{value}</MarkDownText>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MDCrib = () => {
  return (
    <MarkDownText>
      {`
# Markdown шпаргалка

## Заголовки
# H1  
## H2  
### H3  

\`\`\`md
# H1
## H2
### H3
\`\`\`

---

## Текст
**Жирный** → \`**текст**\`  
*Курсив* → \`*текст*\`  
~~Зачёркнутый~~ → \`~~текст~~\`  
\`Моноширинный\` → \`\` \`текст\` \`\`  

---

## Списки
- элемент  
- элемент  

\`\`\`md
- элемент
- элемент
\`\`\`

1. элемент  
2. элемент  

\`\`\`md
1. элемент
2. элемент
\`\`\`

---

## Ссылки
[Название](https://example.com)  

\`\`\`md
[Название](https://example.com)
\`\`\`

---

## Картинки
Обычная:  
![alt](https://cdna.artstation.com/p/assets/images/images/085/023/762/large/anato-finnstark-img-20230809-152145w34.jpg?1739801345)  

\`\`\`md
![alt](/path/to/image.png)
\`\`\`

С контролем размера:  
<img src="https://cdna.artstation.com/p/assets/images/images/085/023/762/large/anato-finnstark-img-20230809-152145w34.jpg?1739801345" width="58" height="56"/>  

\`\`\`md
<img src="/MarkdownToolboxSmall.png" width="58" height="56"/>
\`\`\`

---

## Цитаты
> Вот так пишется цитата  

\`\`\`md
> Вот так пишется цитата
\`\`\`

---

## Код
Однострочный → \`код\`  

\`\`\`md
\`код\`
\`\`\`

Многострочный:  
\`\`\`js
console.log("Пример");
\`\`\`

\`\`\`md
\`\`\`js
console.log("Пример");
\`\`\`
\`\`\`

---

## Горизонтальная линия
---

\`\`\`md
---
\`\`\`

---

## Таблицы
| Имя    | Класс | Уровень |
|--------|-------|---------|
| Артас  | Пал   | 10      |
| Джайна | Маг   | 12      |

\`\`\`md
| Имя    | Класс | Уровень |
|--------|-------|---------|
| Артас  | Пал   | 10      |
| Джайна | Маг   | 12      |
\`\`\`

---

## Чекбоксы (списки задач)
- [x] Сделано  
- [ ] Не сделано  

\`\`\`md
- [x] Сделано
- [ ] Не сделано
\`\`\`
      `}
    </MarkDownText>
  );
};
