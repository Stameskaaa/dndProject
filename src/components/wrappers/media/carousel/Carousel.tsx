import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { PayCard, type PayCardProps } from '../../cards/payCard/PayCard';

const PayInfo: PayCardProps[] = [
  {
    title: 'Регулярные игры',
    description:
      'Каждую неделю по выходным в нашем общем мире можно отправиться в новые приключения вместе с другими героями нашего клуба! ',
    price: 3000,
  },
  {
    title: 'Заказные игры',
    description:
      'Порой на доске объявлений не достает заданий которые были бы интересны вам? Не беда ведь вы всегда можете стать тем кто сам объявит о сборе товарищей в пути к новым приключениям',
    price: 3000,
  },
  {
    title: 'Выездные кампании',
    description:
      'Большое приключение и путешествие как для игроков так и для их персонажей! Мы уезжаем прочь от городской суеты и даём вам возможность погрузиться в огромную историю и стать в ней главными героями которые будут вершить судьбы народов, миров и главное строить свою собственную судьбу',
    price: 3000,
  },
  {
    title: 'Городские кампании',
    description:
      'Погрузитесь в глубокую и долгую историю проведет вас сквозь множество встреч, событий и подарит незабываемые истории о множестве дивных и пугающих уголков нашего мира.',
    price: 3000,
  },
  {
    title: 'Единоразовые приключения-ваншоты',
    description:
      'Не всегда у нас есть время для регулярной игры и погружения огромный мир. Специально для тех кто хочет хоть изредка посвятить свое время такому досугу как D&D мы организуем одноразовые приключения',
    price: 3000,
  },
  {
    title: 'Индивидуальные игры',
    description:
      'Огромный мир, множество персонажей и главное столько амбиций и целей а быть может просто желание наслаждаться фентези миром D&D в одиночестве или с самым близким товарищем все это также является возможностью в виде индивидуальных отыгрышей.',
    price: 3000,
  },
  {
    title: 'Аренда клубного пространства',
    description:
      'Мы с радостью предоставим вам наше помещение для проведения собственных игр, мероприятий и досуга.',
    price: 3000,
  },
  {
    title: 'Ивенты',
    description:
      'Самые масштабные события клуба готовые собрать за единым сюжетом более 40 героев  Ивенты знаменуют собой особые перемены в мире будь то сражение архидемона или спасение королевства в финальной битве! А главное для участников клуба совершенно бесплатно!',
    price: 3000,
  },
];

export function CarouselCompoent() {
  return (
    <Carousel
      opts={{
        dragFree: true,
        align: 'center',
        // loop: true,
      }}
      className="w-[90%] max-w-[1700px]">
      <CarouselContent className="p-10">
        {PayInfo.map((data, index) => (
          <CarouselItem key={index} className="md:basis-1/2  lg:basis-1/2 xl:basis-1/3">
            <motion.div
              viewport={{ amount: 0.7 }}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-1 h-full">
              <PayCard {...data} />
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex bg-brand-300 border-none cursor-pointer hover:bg-brand-200 hover:text-accent-100 text-accent-100 w-[60px] h-[40px]" />
      <CarouselNext className="hidden lg:flex bg-brand-300 border-none cursor-pointer hover:bg-brand-200 hover:text-accent-100  text-accent-100  w-[60px] h-[40px]" />
    </Carousel>
  );
}
