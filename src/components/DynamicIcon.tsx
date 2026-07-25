"use client";

import * as LucideIcons from "lucide-react";

interface DynamicIconProps extends Omit<React.ComponentPropsWithoutRef<"svg">, "name"> {
  name: string;
  className?: string;
}

export default function DynamicIcon({ name, className, ...props }: DynamicIconProps) {
  // Access the icon component by its name from Lucide library
  const IconComponent = (LucideIcons as any)[name];

  if (!IconComponent) {
    // Return a default HelpCircle icon if the specified name doesn't exist
    return <LucideIcons.HelpCircle className={className} {...props} />;
  }

  return <IconComponent className={className} {...props} />;
}
