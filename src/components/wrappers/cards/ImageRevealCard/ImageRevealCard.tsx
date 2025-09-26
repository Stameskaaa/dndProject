import classNames from 'classnames';
import { Text } from '../../typography/Text';
import { Separator } from '@/components/ui/separator';

interface ImageRevealCardProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  name: string;
  description: string;
}

export const ImageRevealCard: React.FC<ImageRevealCardProps> = ({
  src,
  name,
  description,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(
        'w-full flex-1 min-h-[320px] transition-all group hover:z-1 hover:scale-102 relative cursor-pointer duration-500 border-brand-400',
        className,
      )}>
      <div className="h-[400px]"></div>
      <img src={src} className="w-full absolute inset-0 h-full object-cover" />
      <div className="absolute inset-0 p-4 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <div className="border-brand-100  border-1 w-full h-full flex flex-col items-center justify-center">
          <Text className="text-[24px]" color="brand-100">
            {name}
          </Text>
          <Separator className="!w-[40%] !h-[1px]" />
          <Text size="md" color="text-description">
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
};
