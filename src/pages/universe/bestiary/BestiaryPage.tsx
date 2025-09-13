import { Text } from '@/components/wrappers/typography/Text';
import { Section } from '@/components/wrappers/sections/section/Section';
import { cn } from '@/lib/utils';
import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import { DescriptionList } from '@/components/wrappers/typography/DescriptionList';
import { Heart, Footprints, Shield, Swords, Scale } from 'lucide-react';

export const BestiaryPage = () => {
  const getMonsterStats = (monster: any) => {
    return [
      {
        title: 'ХП',
        value: monster.hp || '—',
        icon: Heart,
      },
      {
        title: 'Скорость',
        value: monster.speed || '—',
        icon: Footprints,
      },
      {
        title: 'Класс брони',
        value: monster.proficiency_bonus ? `+${monster.proficiency_bonus}` : '—',
        icon: Shield,
      },
      {
        title: 'Опасность',
        value: monster.challenge || '—',
        icon: Scale,
      },
      {
        title: 'Тип',
        value: monster.type_id,
        icon: Swords,
      },
      {
        title: 'Размер',
        value: monster.size_id,
      },
    ] satisfies { title: React.ReactNode; value: React.ReactNode; icon?: any }[];
  };

  const monster = {};

  return (
    <Section paddingY="medium" fixedWidth screen className="flex flex-col">
      <Text as="span" className="mx-auto mb-4" size="3xl">
        Бестиарий
      </Text>

      {/* <div className="flex flex-col gap-3">
        {Array.from({ length: 20 }).map(() => (
          <div
            key={monster?.id}
            className={cn(
              'relative overflow-hidden rounded-2xl shadow-lg',
              'bg-gradient-to-br from-brand-400/80 to-brand-600/60',
              'backdrop-blur-md border border-white/10',
            )}>
            <div className="flex flex-col justify-center p-6 flex-1">
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow">{monster.name}</h3>
              <DescriptionList
                options={{
                  background: true,
                  size: 'xl',
                  className: 'grid grid-cols-2 gap-3',
                }}
                data={getMonsterStats(monster)}
              />
            </div>

            <div className="relative w-72 flex-shrink-0">
              <img src={monster.src} alt={monster.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <h3 className="absolute bottom-2 left-4 text-xl font-bold text-white drop-shadow">
                {monster.name}
              </h3>
            </div>
            <DescriptionList
              options={{ background: true, size: 'xl', className: 'max-w-max' }}
              data={getMonsterStats(monster)}
            />
            <div className="p-4 flex flex-col gap-2 text-sm text-white/90">
              <p>
                <span className="font-semibold">Тип:</span> {monster.type_id}
              </p>
              <p>
                <span className="font-semibold">Размер:</span> {monster.size_id}
              </p>
              <p>
                <span className="font-semibold">ХП:</span> {monster.hp}
              </p>
              <p>
                <span className="font-semibold">Скорость:</span> {monster.speed}
              </p>
              <p>
                <span className="font-semibold">Опасность:</span> {monster.challenge || '—'}
              </p>
            </div>
            <MarkDownText>{monster.md_content}</MarkDownText>
          </div>
        ))}
      </div> */}
    </Section>
  );
};
