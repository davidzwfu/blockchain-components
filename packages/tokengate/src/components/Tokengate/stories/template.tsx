import {Button} from 'shared';

import {Tokengate} from '../Tokengate';

import type {TokengateProps} from '~/types';

export const defaultCustomDiscountTitles = {
  discountCustomTitles: {
    lockedSubtitle: undefined,
    lockedTitle: undefined,
    unlockedSubtitle: undefined,
    unlockedTitle: undefined,
  },
};

export const defaultCustomExclusiveAccessTitles = {
  exclusiveCustomTitles: {
    lockedSubtitle: undefined,
    lockedTitle: undefined,
    unlockedSubtitle: undefined,
    unlockedTitle: undefined,
  },
};

export const Template = (argOverrides: Partial<TokengateProps>) => {
  const args: TokengateProps = {
    isConnected: false,
    connectButton: (
      <Button label="Connect wallet" fullWidth primary size="Lg" />
    ),
    connectedButton: <Button label="0xab...aec9b" fullWidth size="Lg" />,
    ...argOverrides,
  };

  return <Tokengate {...args} />;
};
