import { Separator } from '@/components/ui/separator';
import { ImageRevealCard } from '@/components/wrappers/cards/ImageRevealCard/ImageRevealCard';
import { PreviewCard } from '@/components/wrappers/cards/PreviewCard/PreviewCard';
import { Section } from '@/components/wrappers/sections/section/Section';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { Text } from '@/components/wrappers/typography/Text';

export const WorldPage = () => {
  return (
    <>
      <div className="w-full max-h-[80vh] relative flex justify-center">
        <img
          className="max-h-[80vh] w-full object-contain"
          src="https://cdna.artstation.com/p/assets/images/images/053/805/204/4k/andy-walsh-brokenworld-andywalsh-watermark-2k.jpg?1663078623"
          alt=""
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, #141a1b 15%, transparent 100%)',
          }}
        />
        <Text
          gradient="brand-gradient"
          className="absolute text-[104px] bottom-0 left-1/2 -translate-x-1/2">
          Долина Гурван-Гол
        </Text>
      </div>

      <Separator spacing="equalLarge" edgeEffect="gradient" edgeColor="brand-500" edgeSide="both" />
      <Section fixedWidth screen className="flex flex-col gap-14">
        <MarkDownText className="!max-w-[500px] mx-auto">
          В вопросе о происхождении йордлов мнения исследователей расходятся. Некоторые утверждают,
          что побывали на родине этих созданий – за пределами материального мира, в удивительном
          краю, где безраздельно правит магия и куда ведут незримые тропы. Если отправиться туда в
          погоне за чудесами, можно потеряться и остаться в этой стране грез навсегда. Рассказывают,
          что у того, кто не родился йордлом, в Бандл Сити обостряются все чувства. Цвета кажутся
          намного ярче, вкус еды и напитков одурманивает и годами не уходит из памяти. Солнечный
          свет здесь кажется золотым, вода кристально чиста, а урожай щедр и обилен. Может быть, эти
          истории правдивы, а может и нет – ведь каждый рассказывает о своем путешествии в Бандл
          Сити по-разному. Достоверно известно лишь одно: сам город и его обитатели существуют вне
          времени. Возможно, именно поэтому побывавшие в Бандл Сити возвращались глубокими стариками
          – или не возвращались вовсе.
        </MarkDownText>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <Separator
              edgeEffect="gradient"
              edgeColor="brand-500"
              edgeSide="both"
              spacing="empty"
              className="w-auto flex-1"
            />
            <Text>Страны</Text> <Separator spacing="empty" className="w-auto flex-1" />
          </div>
          <div className="flex gap-4">
            <PreviewCard
              name="Страна"
              src="https://i.pinimg.com/1200x/ab/72/a7/ab72a70bb430e627574bfdfc28cdd2de.jpg"
            />
            <PreviewCard
              name="Страна"
              src="https://i.pinimg.com/1200x/19/a5/95/19a5957e78ede0702fa7c74961e1c7e8.jpg"
            />
            <PreviewCard
              name="Страна"
              src="https://i.pinimg.com/1200x/b5/d1/f3/b5d1f373409e35446a60d22ecdc734f0.jpg"
            />
            <PreviewCard
              name="Страна"
              src="https://i.pinimg.com/1200x/b9/b4/d6/b9b4d6ee614f28cbbdc1f5d46cf047cb.jpg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <Separator spacing="empty" className="w-auto flex-1" />
            <Text>Локации</Text> <Separator spacing="empty" className="w-auto flex-1" />
          </div>

          <div className="flex gap-4">
            <PreviewCard
              name="Локация"
              src="https://i.pinimg.com/1200x/ab/72/a7/ab72a70bb430e627574bfdfc28cdd2de.jpg"
            />
            <PreviewCard
              name="Локация"
              src="https://i.pinimg.com/1200x/19/a5/95/19a5957e78ede0702fa7c74961e1c7e8.jpg"
            />
            <PreviewCard
              name="Локация"
              src="https://i.pinimg.com/1200x/b5/d1/f3/b5d1f373409e35446a60d22ecdc734f0.jpg"
            />
            <PreviewCard
              name="Локация"
              src="https://i.pinimg.com/1200x/b9/b4/d6/b9b4d6ee614f28cbbdc1f5d46cf047cb.jpg"
            />
          </div>

          <div>
            <div className="flex gap-3 items-center">
              <Separator spacing="empty" className="w-auto flex-1" />
              <Text>История</Text> <Separator spacing="empty" className="w-auto flex-1" />
            </div>
            <MarkDownText className="!max-w-[500px] mx-auto">
              В вопросе о происхождении йордлов мнения исследователей расходятся. Некоторые
              утверждают, что побывали на родине этих созданий – за пределами материального мира, в
              удивительном краю, где безраздельно правит магия и куда ведут незримые тропы. Если
              отправиться туда в погоне за чудесами, можно потеряться и остаться в этой стране грез
              навсегда. Рассказывают, что у того, кто не родился йордлом, в Бандл Сити обостряются
              все чувства. Цвета кажутся намного ярче, вкус еды и напитков одурманивает и годами не
              уходит из памяти. Солнечный свет здесь кажется золотым, вода кристально чиста, а
              урожай щедр и обилен. Может быть, эти истории правдивы, а может и нет – ведь каждый
              рассказывает о своем путешествии в Бандл Сити по-разному. Достоверно известно лишь
              одно: сам город и его обитатели существуют вне времени. Возможно, именно поэтому
              побывавшие в Бандл Сити возвращались глубокими стариками – или не возвращались вовсе.
            </MarkDownText>
          </div>
          <ImageRevealCard
            name="Пантеон богов"
            description="описание"
            src="https://i.pinimg.com/1200x/02/0d/ff/020dfff081c9911f5568e4087e12c3ae.jpg"
          />
        </div>
      </Section>
    </>
  );
};
