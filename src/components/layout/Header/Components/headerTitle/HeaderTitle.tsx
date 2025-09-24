import { memo, type RefObject } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DragonIcon } from '@/assets/icons/main/DragonIcon';
import type { ActiveRouteInfo } from '@/routes/helpers';
import { AnimatedHeaderTitleText, HeaderTitleText } from './HeaderTitleText';

const animatedHeaderPaths = ['/'];
const title = 'Time of heroes';

interface HeaderTitleProps {
  headerRef: RefObject<HTMLDivElement | null>;
  isScrolled: boolean | null;
  locationData: ActiveRouteInfo;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = memo(
  ({ headerRef, isScrolled, locationData }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const shouldAnimate = animatedHeaderPaths.includes(location.pathname);

    return (
      <div ref={headerRef} className="grid items-center w-[230px] h-[40px]">
        {isScrolled !== null &&
          headerRef.current &&
          (shouldAnimate ? (
            <AnimatedHeaderTitleText
              parentRef={headerRef}
              isScrolled={!!isScrolled}
              title={title}
            />
          ) : (
            <>
              <HeaderTitleText>
                {locationData?.parent?.title && (
                  <div onClick={() => navigate('/')} className="w-[40px] cursor-pointer">
                    <DragonIcon />
                  </div>
                )}
                {locationData?.parent?.title || title}
              </HeaderTitleText>
            </>
          ))}
      </div>
    );
  },
);
