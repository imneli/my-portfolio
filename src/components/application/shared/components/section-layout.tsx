import { ReactNode } from "react";

const ModuleSectionWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`mx-auto p-4 border border-muted-foreground space-y-6 text-gray-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default ModuleSectionWrapper;
