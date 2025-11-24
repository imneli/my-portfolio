interface SectionTitleProps {
  title: string;
  variant?: "default" | "primary" | "secondary" | "accent" | "yellow";
}

const SectionTitle = ({ title, variant = "default" }: SectionTitleProps) => {
  const variants = {
    default: {
      border: "border-zinc-400",
      text: "text-zinc-400",
      shadow: "shadow-[4px_4px_0px_0px_rgba(161,161,170,1)]",
    },
    primary: {
      border: "border-green-500",
      text: "text-green-500",
      shadow: "shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]",
    },
    secondary: {
      border: "border-blue-500",
      text: "text-blue-500",
      shadow: "shadow-[4px_4px_0px_0px_rgba(59,130,246,1)]",
    },
    yellow: {
      border: "border-yellow-500",
      text: "text-yellow-500",
      shadow: "shadow-[4px_4px_0px_0px_#efe93f]",
    },
    accent: {
      border: "border-purple-500",
      text: "text-purple-500",
      shadow: "shadow-[4px_4px_0px_0px_rgba(168,85,247,1)]",
    },
  };

  const currentVariant = variants[variant];

  return (
    <div
      className={`p-1 my-8 px-4 border ${currentVariant.border} ${currentVariant.shadow} inline-block`}
    >
      <h2
        className={`font-pixel whitespace-nowrap uppercase tracking-widest text-lg ${currentVariant.text}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
