import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AlertCircle, Info, Lightbulb, X } from 'lucide-react';
import type { ContentBlock } from '../types';

// Long-form blocks for the project write-ups (same look as the KD-27 Thought Lab articles)

const Caption: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <figcaption className="mt-3 text-sm leading-relaxed text-faint">{children}</figcaption>
);

// Full-size image over the page. Closes on the X, a click anywhere, or Escape.
const Lightbox: React.FC<{ src: string; caption?: string; onClose: () => void }> = ({ src, caption, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption || 'Full-size image'}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex cursor-zoom-out flex-col items-center justify-center bg-black/95 p-4 sm:p-8"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
      >
        <X size={22} />
      </button>
      <img src={src} alt={caption || 'Full-size image'} className="max-h-[85vh] max-w-full rounded-sm bg-white object-contain" />
      {caption && <p className="mt-3 max-w-2xl text-center text-sm text-white/80">{caption}</p>}
    </div>,
    document.body
  );
};

// Drawings and screenshots open full size on click, since they're hard to read at column width
const ImageBlock: React.FC<{ src: string; caption?: string; alt?: string; narrow?: boolean }> = ({ src, caption, alt, narrow }) => {
  const [open, setOpen] = useState(false);
  return (
    <figure className={`my-10 ${narrow ? 'mx-auto max-w-md' : ''}`}>
      <button onClick={() => setOpen(true)} title="View full size" className="block w-full cursor-zoom-in">
        <img src={src} alt={alt || caption || ''} loading="lazy" className="h-auto w-full rounded-sm border border-rule bg-white" />
      </button>
      {caption && <Caption>{caption}</Caption>}
      {open && <Lightbox src={src} caption={caption} onClose={() => setOpen(false)} />}
    </figure>
  );
};

// `contain` letterboxes each image instead of cropping it, for diagrams and drawings
const GalleryBlock: React.FC<{ images: { src: string; caption?: string }[]; caption?: string; contain?: boolean }> = ({
  images,
  caption,
  contain,
}) => {
  const [open, setOpen] = useState<{ src: string; caption?: string } | null>(null);

  return (
    <figure className="my-10">
      <div className={`grid grid-cols-2 gap-3 ${images.length % 3 === 0 ? 'md:grid-cols-3' : ''}`}>
        {images.map((img) => (
          <div key={img.src}>
            <button onClick={() => setOpen(img)} title="View full size" className="block w-full cursor-zoom-in">
              <img
                src={img.src}
                alt={img.caption || caption || ''}
                loading="lazy"
                className={`aspect-[4/3] w-full rounded-sm border border-rule bg-white ${contain ? 'object-contain p-1' : 'object-cover'}`}
              />
            </button>
            {img.caption && <p className="mt-2 text-xs leading-snug text-faint">{img.caption}</p>}
          </div>
        ))}
      </div>
      {caption && <Caption>{caption}</Caption>}
      {open && <Lightbox src={open.src} caption={open.caption} onClose={() => setOpen(null)} />}
    </figure>
  );
};

const CALLOUT = {
  info: { box: 'bg-accent-soft border-accent/20', icon: <Info className="h-5 w-5 flex-shrink-0 text-accent" /> },
  warning: { box: 'bg-warn-soft border-warn/25', icon: <AlertCircle className="h-5 w-5 flex-shrink-0 text-warn" /> },
  tip: { box: 'bg-ok-soft border-ok/25', icon: <Lightbulb className="h-5 w-5 flex-shrink-0 text-ok" /> },
};

export const ContentBlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'text':
      return <p className="mb-6 text-[17px] leading-[1.75] text-ink/85">{block.content}</p>;

    case 'heading':
      return block.level === 3 ? (
        <h3 className="mt-10 mb-4 font-serif text-2xl leading-snug text-ink">{block.content}</h3>
      ) : (
        <h2 className="mt-16 mb-6 border-t border-rule pt-8 font-serif text-3xl leading-tight tracking-tight text-ink">
          {block.content}
        </h2>
      );

    case 'image':
      return <ImageBlock src={block.src} caption={block.caption} alt={block.alt} narrow={block.narrow} />;

    case 'gallery':
      return <GalleryBlock images={block.images} caption={block.caption} contain={block.contain} />;

    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul';
      return (
        <ListTag className="my-6 space-y-3">
          {block.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[17px] leading-[1.7] text-ink/85">
              {block.ordered ? (
                <span className="mt-[3px] w-5 flex-shrink-0 font-mono text-sm text-faint">{idx + 1}.</span>
              ) : (
                <span className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
              )}
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ListTag>
      );
    }

    case 'callout': {
      const style = CALLOUT[block.variant ?? 'info'];
      return (
        <div className={`my-8 flex items-start gap-3 rounded-sm border p-4 ${style.box}`}>
          {style.icon}
          <p className="text-[15px] leading-relaxed text-ink/85">{block.content}</p>
        </div>
      );
    }

    // Spaces and line breaks are kept, so several equations can sit in one block, one per line
    case 'equation':
      return (
        <div className="my-8 overflow-x-auto rounded-sm border border-rule bg-card px-6 py-5">
          <p className="whitespace-pre text-center font-mono text-[15px] leading-loose text-ink md:text-base">{block.content}</p>
        </div>
      );

    case 'table':
      return (
        <figure className="my-8">
          <div className="overflow-x-auto rounded-sm border border-rule">
            <table className="w-full border-collapse text-left text-[14.5px]">
              <thead className="bg-wash">
                <tr>
                  {block.headers.map((h, i) => (
                    <th key={h} className={`px-4 py-2.5 font-mono text-[11px] font-normal uppercase tracking-wider text-faint ${i > 0 ? 'text-right' : ''}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-card">
                {block.rows.map((row, r) => (
                  <tr key={r} className="border-t border-rule">
                    {row.map((cell, c) => (
                      <td key={c} className={`px-4 py-2.5 ${c > 0 ? 'text-right tabular-nums text-ink' : 'text-ink/85'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && <Caption>{block.caption}</Caption>}
        </figure>
      );

    case 'stats':
      return (
        <dl className="my-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-4">
          {block.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse bg-card px-4 py-4">
              <dt className="mt-1.5 text-xs leading-snug text-faint">{item.label}</dt>
              <dd className="font-serif text-[1.65rem] leading-none tracking-tight text-accent">{item.value}</dd>
            </div>
          ))}
        </dl>
      );

    default:
      return null;
  }
};
