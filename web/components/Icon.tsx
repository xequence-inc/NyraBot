"use client";
import { Icon as IconifyIcon } from "@iconify/react";

interface IconProps {
  name: string;
  variant?: "outline" | "filled"; // Default to outline
  className?: string;
  onClick?: () => void;
}

export default function Icon({ name, variant = "outline", className, onClick }: IconProps) {
  // Brand mappings
  if (name === "discord") {
    return <IconifyIcon icon="simple-icons:discord" className={className} onClick={onClick} />;
  }

  // Mage Icons convention: 
  // Outline: "mage:dashboard"
  // Filled: "mage:dashboard-fill"
  
  // If the user passes a name that already has 'mage:', strip it to be safe, then reconstruct.
  const baseName = name.replace("mage:", "").replace("-fill", "");
  
  // Construct the full icon name
  const iconName = variant === "filled" 
    ? `mage:${baseName}-fill` 
    : `mage:${baseName}`;

  return (
    <IconifyIcon 
        icon={iconName} 
        className={className} 
        onClick={onClick}
    />
  );
}
