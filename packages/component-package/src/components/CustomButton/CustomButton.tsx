import React, { forwardRef } from 'react';
import { ButtonProps } from '@mui/material/Button';
import { ButtonVariantEnum, CustomButtonTypes } from './CustomButton.types';
import { StyledButton } from './CustomButton.styles';

// we used to have JSX.IntrinsicElements['button'] & CustomButtonTypes as the type generic but it seems that
// ButtonProps includes both the MUI types and the button intrinsic types
const CustomButton = forwardRef<
  HTMLButtonElement,
  ButtonProps & CustomButtonTypes
>(
  (
    {
      children,
      buttonVariant = ButtonVariantEnum.PRIMARY,
      disabled = false,
      disableRipple = false,
      textColor,
      backgroundColor,
      hoverTextColor,
      hoverBackgroundColor,
      disableTextColor,
      disableBackgroundColor,
      testId = '',
      ...buttonProps
    },
    ref,
  ) => {
    return (
      <StyledButton
        {...(buttonProps as ButtonProps)}
        disabled={disabled}
        data-testid={testId}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  },
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;
