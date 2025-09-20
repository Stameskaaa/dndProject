import React from 'react';
import { ArmchairIcon, Heart, MapPin, Shield, Zap } from 'lucide-react';
import type { NPC } from '@/features/npc/types';
import { Button } from '@/components/ui/button';
import type { God } from '@/features/gods/types';
import { Separator } from '@/components/ui/separator';
import { useNavigatePath } from '@/hooks/useNavigatePath';
import { Text } from '@/components/wrappers/typography/Text';
import type { HostileCreatures } from '@/features/hostileCreatures/types';

interface CreatureCardProps {
  creatureData?: HostileCreatures | God | NPC;
}

export const CreatureCard: React.FC<CreatureCardProps> = ({ creatureData }) => {
  if (!creatureData) return null;

  return (
    <div className="bg-brand-400 border border-brand-300 rounded-lg overflow-hidden shadow-lg">
      <div className="aspect-[16/9] w-full relative overflow-hidden bg-brand-300">
        <img
          src={creatureData.src}
          alt="картинка существа"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #1c2224 0%, transparent 40%)' }}
        />
        {creatureData.name && (
          <Text
            color="brand-100"
            className="absolute top-0 left-1/2 -translate-x-1/2 text-center min-w-[280px] max-w-[600px] bg-brand-400 rounded-b-lg px-2 py-[2px]"
            size="xl">
            {creatureData.name}
          </Text>
        )}
      </div>

      <div className="p-3">
        <CreatureTopContent creatureData={creatureData} />
        <CreatureBottomContent creatureData={creatureData} />
      </div>
    </div>
  );
};

export const CreatureTopContent: React.FC<CreatureCardProps> = ({ creatureData }) => {
  if (!creatureData) return null;

  return (
    <div className="flex items-start justify-between gap-2 flex-1">
      <Text color="text-description" className="leading-5" size="lg">
        {creatureData.shortDescription}
      </Text>
    </div>
  );
};

export const CreatureBottomContent: React.FC<CreatureCardProps> = ({ creatureData }) => {
  const { navigatePath } = useNavigatePath();
  if (!creatureData) return null;

  const hasShortDescription = Boolean(creatureData.shortDescription);

  const challenge = 'challenge' in creatureData ? creatureData.challenge : undefined;
  const status = 'status' in creatureData ? creatureData.status : undefined;
  const locations = 'locations' in creatureData ? creatureData.locations : undefined;

  const hp = 'hp' in creatureData ? creatureData.hp : undefined;
  const armorClass = 'armorClass' in creatureData ? creatureData.armorClass : undefined;

  const hasStats = Boolean(hp || armorClass);
  const hasAnyInfo = Boolean(challenge || status || (locations && locations.length) || hasStats);
  if (!hasAnyInfo) return null;

  return (
    <div className="flex flex-col gap-3 mt-4">
      {hasShortDescription && <Separator className="bg-brand-300" spacing="empty" />}

      <div className="flex flex-col gap-2">
        {hp && (
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-400" />
            <Text size="sm" color="text-description">
              HP: {hp}
            </Text>
          </div>
        )}

        {armorClass && (
          <div className="flex items-center gap-2">
            <ArmchairIcon className="w-4 h-4 text-yellow-400" />
            <Text size="sm" color="text-description">
              AC: {armorClass}
            </Text>
          </div>
        )}

        {challenge !== undefined && (
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <Text size="sm" color="text-description">
              Опасность: {challenge}
            </Text>
          </div>
        )}

        {status && (
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-sky-400" />
            <Text size="sm" color="text-description">
              Статус: {status}
            </Text>
          </div>
        )}

        {locations && locations.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            <Text size="sm" color="text-description" className="flex flex-wrap gap-1">
              {locations.map((loc) => loc.name).join(', ')}
            </Text>
          </div>
        )}
      </div>

      <div className="ml-auto">
        <Button
          size="sm"
          variant="ghost"
          onClick={() =>
            navigatePath(`/universe/bestiary/${'id' in creatureData ? creatureData.id : ''}`)
          }>
          Подробнее →
        </Button>
      </div>
    </div>
  );
};
