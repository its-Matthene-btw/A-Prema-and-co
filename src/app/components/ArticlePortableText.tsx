"use client";

import { PortableText, PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import SanityImage from './SanityImage';
import { useEffect } from 'react';

// --- START: New Social Embed Component ---

// Helper function to add a script to the page if it doesn't already exist
const loadScript = (src: string, id: string) => {
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.src = src;
  script.id = id;
  script.async = true;
  script.defer = true;
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
};

// This component will detect the URL and render the correct embed
const SocialEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    if (url.includes('facebook.com')) {
      loadScript('https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0', 'facebook-jssdk');
      // @ts-expect-error: TypeScript does not recognize the FB object on the window, but it is added by the Facebook SDK.
      if (window.FB) { window.FB.XFBML.parse(); }
    } else if (url.includes('instagram.com')) {
      loadScript('//www.instagram.com/embed.js', 'instagram-embed-script');
      // @ts-expect-error: TypeScript does not recognize the instgrm object on the window, but it is added by the Instagram embed script.
      if (window.instgrm) { window.instgrm.Embeds.process(); }
    }
  }, [url]);

  if (url.includes('facebook.com')) {
    // Facebook's official embed structure
    return (
      <div className="flex justify-center">
        <div className="fb-post" data-href={url} data-width="500" data-show-text="true"></div>
      </div>
    );
  }

  if (url.includes('instagram.com')) {
    // Instagram's official embed structure
    return (
      <div className="flex justify-center">
        <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14"></blockquote>
      </div>
    );
  }

  // Fallback for other links (like LinkedIn)
  return <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline transition block truncate">{url}</a>;
};
// --- END: New Social Embed Component ---


// The main components object, now using our new SocialEmbed component
const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-bold text-[#0a192f] mt-10 mb-4">{children}</h2>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 text-lg italic text-gray-700">{children}</blockquote>,
    normal: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6 pl-4">{children}</ul>,
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => (
      <div className="my-8 shadow-lg rounded-lg overflow-hidden">
        <SanityImage image={value} alt={value.alt || 'Article image'} className="w-full h-auto object-cover" />
        {value.alt && <p className="text-center text-sm text-gray-500 italic py-2 bg-gray-50">{value.alt}</p>}
      </div>
    ),
    code: ({ value }) => (
      <pre className="bg-gray-800 text-white p-4 rounded-lg my-6 overflow-x-auto text-sm">
        <code>{value.code}</code>
      </pre>
    ),
    socialPost: ({ value }) => { // This part is now updated
        if (!value.url) return null;
        return (
            <div className="my-8">
                <SocialEmbed url={value.url} />
            </div>
        );
    }
  },
  marks: {
    link: ({children, value}) => (
      <a href={value.href} rel={!value.href.startsWith('/') ? 'noreferrer noopener' : undefined} className="text-[#D4AF37] hover:underline transition">
        {children}
      </a>
    ),
  },
};

// The main export remains the same
export function ArticlePortableText({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}