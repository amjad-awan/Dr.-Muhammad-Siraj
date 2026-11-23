"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

interface SmartImageProps {
  image: ImageAsset;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/**
 * Fills its (relatively positioned) parent. If the remote photo ever fails to load,
 * a calm branded placeholder is shown instead of a broken image icon.
 */
export function SmartImage({ image, sizes, priority = false, className }: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        className="absolute inset-0 flex items-center justify-center bg-primary-soft text-primary/60"
      >
        <ImageOff className="size-10" aria-hidden="true" />
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
      style={image.position ? { objectPosition: image.position } : undefined}
    />
  );
}
