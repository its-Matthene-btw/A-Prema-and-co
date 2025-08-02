"use client";

import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import type { SanityImageSource, SanityImageObject } from '@sanity/image-url/lib/types/types';

// This is a TypeScript Type Guard.
// It checks if the provided 'image' has the structure of a full SanityImageObject.
function isSanityImageObject(image: SanityImageSource): image is SanityImageObject {
    return typeof image === 'object' && image !== null && 'asset' in image;
}

interface SanityImageProps {
    image: SanityImageSource;
    alt: string;
    className?: string;
}

export default function SanityImage({ image, alt, className }: SanityImageProps) {
    const imageProps = useNextSanityImage(client, image);
    const blurDataURL = isSanityImageObject(image) && 'metadata' in image.asset && image.asset.metadata?.lqip;

    // Use the robust type guard. If it's not a full image object,
    // it will safely render the placeholder. This resolves the TypeScript error.
    if (!isSanityImageObject(image)) {
        return (
            <div className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}>
                <span>Image not available</span>
            </div>
        );
    }

    return (
        <Image
            {...imageProps}
            src={imageProps.src || '/default-image.jpg'}
            alt={alt}
            className={className}
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL || undefined}
        />
    );
}