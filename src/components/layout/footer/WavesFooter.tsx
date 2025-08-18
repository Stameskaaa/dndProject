import React from 'react';
import { motion } from 'framer-motion';
import { Waves } from '@/components/wrappers/visuals/waves/Waves';
import { Separator } from '@/components/ui/separator';
import { SocialButtons } from '@/components/wrappers/buttons/socialButton/SocialButtons';

const ButtList = [{ text: 'О нас' }, { text: 'Не о нас' }, { text: 'О них' }, { text: 'О себе' }];

export const WavesFooter = () => {
  return (
    <Waves>
      <div className="w-full h-full grid grid-rows-2 p-8">
        <div className="flex items-center px-4 justify-between  flex-wrap">
          <h4 className="text-3xl text-text-primary">Time of heroes</h4>

          <div className="flex gap-4 text-text-primary h-[30px]">
            {ButtList.map(({ text }, i) => (
              <React.Fragment key={i}>
                <FooterButton key={text} text={text} />{' '}
                {i !== ButtList.length - 1 && (
                  <Separator className="bg-text-muted" orientation="vertical" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <SocialButtons className="flex gap-3 mt-auto ml-auto" />
      </div>
    </Waves>
  );
};

const FooterButton = ({ text, action }: { text: string; action?: () => {} }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={action}
      className="cursor-pointer transition-colors text-xl bg-transparent text-text-secondary hover:text-accent-100">
      {text}
    </motion.button>
  );
};
