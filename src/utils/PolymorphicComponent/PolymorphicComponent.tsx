import React from "react";

type BoxOwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
};

type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof BoxOwnProps>;

const defaultElement = "div";

export const PolymorphicComponent: <
  E extends React.ElementType = typeof defaultElement
>(
  props: BoxProps<E>
) => React.ReactElement | null = React.forwardRef(
  (props: BoxOwnProps, ref: React.Ref<Element>) => {
    const Element = props.as || defaultElement;
    return <Element ref={ref} {...props} as={undefined} />;
  }
);

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  BoxProps<E>;
