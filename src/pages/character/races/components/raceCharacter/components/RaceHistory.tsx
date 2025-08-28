import { MarkDownText } from '@/components/wrappers/typography/MarkDownText';
import type { Race } from '@/features/races/types';

export const RaceHistory = ({ raceHistory }: { raceHistory: Race['history'] }) => {
  return <MarkDownText>{raceHistory}</MarkDownText>;
};
