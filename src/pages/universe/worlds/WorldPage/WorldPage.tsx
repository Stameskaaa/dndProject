import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ImageRevealCard } from '@/components/wrappers/cards/ImageRevealCard/ImageRevealCard';
import { PreviewCard } from '@/components/wrappers/cards/PreviewCard/PreviewCard';
import { Section } from '@/components/wrappers/sections/section/Section';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { Text } from '@/components/wrappers/typography/Text';

export const WorldPage = () => {
  return (
    <>
      <div className="w-full max-h-[80vh] relative flex justify-center overflow-hidden">
        <img
          className="max-h-[80vh] w-full min-w-[800px] object-contain"
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
          className="absolute text-nowrap text-[30px] sm:text-[40px]  md:text-[65px] xl:text-[104px] bottom-10 left-1/2 -translate-x-1/2">
          Долина Гурван-Гол
        </Text>
      </div>

      <Separator edgeColor="brand-500" spacing="equalLarge" edgeEffect="gradient" />

      <Section fixedWidth screen className="flex flex-col gap-14 overflow-hidden">
        <MarkDownText className="!max-w-[800px] mx-auto">
          В вопросе о происхождении йордлов мнения исследователей расходятся... В вопросе о
          происхождении йордлов мнения исследователей расходятся...В вопросе о происхождении йордлов
          мнения исследователей расходятся...В вопросе о происхождении йордлов мнения исследователей
          расходятся...В вопросе о происхождении йордлов мнения исследователей расходятся...В
          вопросе о происхождении йордлов мнения исследователей расходятся...В вопросе о
          происхождении йордлов мнения исследователей расходятся...В вопросе о происхождении йордлов
          мнения исследователей расходятся...В вопросе о происхождении йордлов мнения исследователей
          расходятся...В вопросе о происхождении йордлов мнения исследователей расходятся...В
          вопросе о происхождении йордлов мнения исследователей расходятся...В вопросе о
          происхождении йордлов мнения исследователей расходятся...
        </MarkDownText>

        <div className="flex flex-col gap-6">
          <WorldsSectionTitle title="Страны" />

          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
            {[
              'https://i.pinimg.com/1200x/ab/72/a7/ab72a70bb430e627574bfdfc28cdd2de.jpg',
              'https://i.pinimg.com/1200x/19/a5/95/19a5957e78ede0702fa7c74961e1c7e8.jpg',
              'https://i.pinimg.com/1200x/b5/d1/f3/b5d1f373409e35446a60d22ecdc734f0.jpg',
              'https://i.pinimg.com/1200x/b9/b4/d6/b9b4d6ee614f28cbbdc1f5d46cf047cb.jpg',
            ].map((src, i) => (
              <PreviewCard key={i} name="Страна" src={src} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">Подробнее</Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <WorldsSectionTitle title="Локации" />

          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
            {[
              'https://i.pinimg.com/1200x/ab/72/a7/ab72a70bb430e627574bfdfc28cdd2de.jpg',
              'https://i.pinimg.com/1200x/19/a5/95/19a5957e78ede0702fa7c74961e1c7e8.jpg',
              'https://i.pinimg.com/1200x/b5/d1/f3/b5d1f373409e35446a60d22ecdc734f0.jpg',
              'https://i.pinimg.com/1200x/b9/b4/d6/b9b4d6ee614f28cbbdc1f5d46cf047cb.jpg',
            ].map((src, i) => (
              <PreviewCard key={i} name="Локация" src={src} />
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">Подробнее</Button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <WorldsSectionTitle title="История" />
          <MarkDownText className="!max-w-[800px] mx-auto">
            Вопрос о происхождении йордлов...Вопрос о происхождении йордлов...Вопрос о происхождении
            йордлов...Вопрос о происхождении йордлов...Вопрос о происхождении йордлов...Вопрос о
            происхождении йордлов...Вопрос о происхождении йордлов...Вопрос о происхождении
            йордлов...Вопрос о происхождении йордлов...
          </MarkDownText>
        </div>

        <ImageRevealCard
          name="Пантеон богов"
          description="описание"
          src="https://i.pinimg.com/1200x/02/0d/ff/020dfff081c9911f5568e4087e12c3ae.jpg"
        />
      </Section>
    </>
  );
};

const WorldsSectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-3 items-center">
      <Separator edgeColor="brand-200" edgeEffect="block" spacing="empty" className="flex-1" />
      <Text className="mx-6" color="brand-100" size="2xl">
        {title}
      </Text>
      <Separator edgeColor="brand-200" edgeEffect="block" spacing="empty" className="flex-1" />
    </div>
  );
};
