import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import type { Race } from '@/features/races/types';

export const RaceDescription = ({ raceDescription }: { raceDescription: Race['description'] }) => {
  return <MarkDownText>{raceDescription}</MarkDownText>;
};
