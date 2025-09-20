import { Text } from '@/components/wrappers/typography/Text';
import type { God } from '@/features/gods/types';
import type { HostileCreatures } from '@/features/hostileCreatures/types';
import type { NPC } from '@/features/npc/types';
import { Description } from './Description';

export function StatBlock({ creatureData }: { creatureData?: HostileCreatures | God | NPC }) {
  if (!creatureData || !('mdStatblock' in creatureData)) {
    return null;
  }

  return (
    <div>
      <Text size="2xl" className="mb-2" color="brand-100">
        Статблок
      </Text>
      {(creatureData.sizeId || creatureData.typeId) && (
        <Description title="" desc={`${creatureData.sizeId} ${creatureData.typeId}`} />
      )}
      {creatureData.armorClass && (
        <Description title="Класс доспеха" desc={creatureData.armorClass} />
      )}
      {creatureData.speed && <Description title="Скорость" desc={creatureData.speed} />}
      {creatureData.savingThrows && (
        <Description title="Спасброски" desc={creatureData.savingThrows} />
      )}
      {creatureData.skills && <Description title="Навыки" desc={creatureData.skills} />}
      {creatureData.conditionImmunities.length > 0 && (
        <Description
          title="Иммунитет к состоянию"
          desc={creatureData.conditionImmunities.map((v) => v).join(', ')}
        />
      )}
      {creatureData.damageResistance.length > 0 && (
        <Description
          title="Сопротивление к урону"
          desc={creatureData.damageResistance.map((v) => v).join(', ')}
        />
      )}
      {creatureData.conditionResistance.length > 0 && (
        <Description
          title="Сопротивление к состоянию"
          desc={creatureData.conditionResistance.map((v) => v).join(', ')}
        />
      )}
      {creatureData.conditionResistance.length > 0 && (
        <Description
          title="Сопротивление к состоянию"
          desc={creatureData.conditionResistance.map((v) => v).join(', ')}
        />
      )}
      {creatureData.senses && <Description title="Чувства" desc={creatureData.senses} />}
      {creatureData.language && <Description title="Языки" desc={creatureData.language} />}
      {creatureData.challenge && <Description title="Опасность" desc={creatureData.challenge} />}
      {creatureData.proficiencyBonus && (
        <Description title="Опасность" desc={creatureData.proficiencyBonus} />
      )}
      {creatureData.mdStatblock && <Description desc={creatureData.mdStatblock} variant="block" />}
    </div>
  );
}
