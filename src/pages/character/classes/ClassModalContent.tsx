// const markdown = `
// # H1 Заголовок
// ## H2 Заголовок
// ### H3 Заголовок
// #### H4 Заголовок
// ##### H5 Заголовок
// ###### H6 Заголовок

// > Это первая строка цитаты
// >
// > А это вторая строка

// Обычный текст, **жирный текст**, *курсив*, ~~зачеркнутый~~, \`инлайн-код\`.

// ---

// ## Списки
// - Элемент списка 1
// - Элемент списка 2
//   - Вложенный элемент

// 1. Нумерация
// 2. Работает
// 3. Тоже вложенный список
//    1. Внутри

// ---

// ## Чекбоксы (GFM)
// - [x] Сделано
// - [ ] Не сделано

// ---

// #### Таблица (GFM)

// | Имя     | Класс    | Уровень |
// |---------|----------|---------|
// | Артём   | Воин     | 5       |
// | Елена   | Маг      | 7       |
// | Кирилл  | Разбойник| 3       |

// ---

// ## Ссылки
// Обычная ссылка: [Google](https://google.com)
// HTML ссылка: <a href="/game/character" target="_blank">Custom link</a>

// ---

// ## Код-блок

// \`\`\`js
// function hello(name) {
//   return \`Привет, \${name}\`
// }
// console.log(hello("Мир"))
// \`\`\`

// ---

// ## HTML внутри (rehype-raw)
// <b>Жирный через HTML</b>
// <i>Курсив через HTML</i>
// <span style="color:red">Красный текст</span>

// ![альтернативный текст](https://i.pinimg.com/736x/4c/8f/e1/4c8fe1e0db55d63a534d34137933517c.jpg)

// #### Таблица (GFM)

// | Имя     | Класс    | Уровень |
// |---------|----------|---------|
// | Артём   | Воин     | 5       |
// | Елена   | Маг      | 7       |
// | Кирилл  | Разбойник| 3       |

// `;

interface ClassModalContent {
  title: string;
  about: string;
  // TODO
  tableData: any;
  peculiarities: { title: string; data: { title: string; description: string }[] };
}

export const ClassModalContent = () => {
  return (
    <div style={{ overflowY: 'auto' }}>
      123213
      {/* <MarkDownText>{markdown}</MarkDownText> */}
    </div>
  );
};
