import { ReactNode } from 'react';

const LayoutContainer = ({
  children,
  useConstrainedBox = true,
  className,
}: {
  children: ReactNode;
  useConstrainedBox?: boolean;
  className?: ReactNode;
}) => {
  return (
    <div
      className={`mx-auto ${className ?? ''} ${
        useConstrainedBox && 'max-w-[1440px]'
      }`}
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
