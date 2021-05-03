import { forwardRef } from "react";
import { PolymorphicComponent, PolymorphicComponentProps } from "utils";

const defaultElement = "h1";

type HeadingOwnProps = {
  children: string | React.ReactNode;
};

type HeadingProps<
  Element extends React.ElementType
> = PolymorphicComponentProps<Element, HeadingOwnProps>;

export const Heading: <E extends React.ElementType = typeof defaultElement>(
  props: HeadingProps<E>
) => React.ReactElement | null = forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    { ...props }: HeadingProps<E>,
    ref: typeof props.ref
  ) => {
    return <PolymorphicComponent as={defaultElement} ref={ref} {...props} />;
  }
);
