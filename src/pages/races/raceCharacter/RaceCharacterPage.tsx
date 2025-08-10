import { useParams } from 'react-router-dom';
import { Text } from '@/components/shared/Typography/Text';
import { ModalContent } from '@/components/shared/PageWIthModal/ModalContent';

export const RaceCharacterPage = () => {
  const { id } = useParams();

  return (
    <ModalContent>
      <Text>currentId:{id}</Text>
    </ModalContent>
  );
};
