import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { useState } from 'react';
import { ModalWindow } from '@/components/wrappers/modals/modalWindow/ModalWindow';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const MOCK_PRODUCTS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: `Услуга ${i + 1}`,
  image: `https://cdna.artstation.com/p/assets/images/images/036/584/474/large/anato-finnstark-1-final-cover-2.jpg?1618064194`,
  shortDesc: `Короткое описание услуги ${i + 1}`,
  fullDesc: `# Полное описание услуги ${
    i + 1
  }\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Пример MD контента для услуги ${
    i + 1
  }.`,
}));

export const CatalogSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section
      paddingY="large"
      screen
      className="mx-auto flex bg-brand-400/50 items-center justify-center flex-col">
      <Text className="mb-14" size="4xl">
        Наши услуги
      </Text>
      <Section fixedWidth>
        <div className="flex gap-4 flex-wrap">
          {MOCK_PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      </Section>
      <ModalWindow
        contentClassname="w-[800px] !max-w-[90vw] max-h-[90%] h-[800px] overflow-y-auto p-4"
        open={activeIndex !== null}
        setOpen={() => setActiveIndex(null)}>
        <CloseButt />
        {activeIndex !== null && (
          <div className="flex max-[687px]:flex-col gap-4">
            <div className="flex-1 min-w-[250px] h-full overflow-hidden rounded-md max-h-[800px] max-[687px]:max-h-[400px]">
              <img
                src={MOCK_PRODUCTS[activeIndex].image}
                alt={MOCK_PRODUCTS[activeIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-[280px] flex flex-col justify-between">
              <div>
                <Text size="2xl" weight="bold" className="mb-4">
                  {MOCK_PRODUCTS[activeIndex].title}
                </Text>
                <MarkDownText className="mb-4">{MOCK_PRODUCTS[activeIndex].fullDesc}</MarkDownText>
              </div>

              <Button size="lg" variant="success">
                Приобрести
              </Button>
            </div>
          </div>
        )}
      </ModalWindow>
    </Section>
  );
};

const CloseButt = ({ setOpen }: { setOpen?: () => void }) => {
  return (
    <Button variant="secondary" onClick={setOpen} className="absolute right-0 m-2">
      <X />
    </Button>
  );
};

interface ProductCardProps {
  product: (typeof MOCK_PRODUCTS)[number];
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="relative flex flex-col min-w-[250px] rounded-sm overflow-hidden flex-1 h-[440px] cursor-pointer hover:shadow-lg transition-shadow group">
      <div className=" w-full flex-1 overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Text size="xl" color="brand-100">
          Подробнее
        </Text>
      </div>
      <div className="absolute bottom-0 border-t-2 border-brand-100 w-full h-[90px] bg-black/75 flex flex-col justify-center p-2">
        <Text size="2xl" weight="bold">
          {product.title}
        </Text>
        <Text color="text-secondary">{product.shortDesc}</Text>
      </div>
    </div>
  );
};
