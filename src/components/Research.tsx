import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RESEARCH_PAPERS } from '../constants';
import type { ResearchPaper } from '../types';
import { PaperPage } from './Placeholders';
import Section from './Section';

// 'Under Review' or 'In Progress' instead of a year
const isPending = (date: string) => ['under review', 'in progress'].includes(date.toLowerCase());

const PaperRow: React.FC<{ paper: ResearchPaper }> = ({ paper }) => {
  const [showAbstract, setShowAbstract] = useState(false);
  const pending = isPending(paper.date);
  const hasLink = paper.link && paper.link !== '#';
  const abstractId = `abstract-${paper.id}`;

  const cover = (
    <div className="overflow-hidden rounded-sm border border-rule bg-white shadow-sm">
      {paper.image ? (
        <img
          src={paper.image}
          alt=""
          loading="lazy"
          className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <PaperPage title={paper.title} venue={paper.publisher} className="aspect-[4/3] w-full" />
      )}
    </div>
  );

  const thumb = paper.image ? (
    <img
      src={paper.image}
      alt=""
      loading="lazy"
      className="aspect-[3/4] w-[72px] rounded-sm border border-rule bg-white object-cover object-top shadow-sm"
    />
  ) : (
    <PaperPage compact title={paper.title} venue={paper.venue} className="aspect-[3/4] w-[72px] rounded-sm border border-rule shadow-sm" />
  );

  return (
    <li className="grid gap-5 py-8 first:pt-0 sm:grid-cols-[1fr_220px] sm:gap-10 sm:py-10 lg:grid-cols-[1fr_300px]">
      <div className="min-w-0">
        <div className="flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span
                className={`inline-flex items-center gap-1.5 font-medium ${pending ? 'text-warn' : 'text-ok'}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${pending ? 'bg-warn' : 'bg-ok'}`} />
                {pending ? paper.date.charAt(0).toUpperCase() + paper.date.slice(1).toLowerCase() : paper.date}
              </span>
              <span className="text-rule">/</span>
              <span className="font-mono text-xs uppercase tracking-wider text-faint">{paper.venue}</span>
            </div>

            <h3 className="font-serif text-xl leading-snug text-ink md:text-[1.4rem]">{paper.title}</h3>
            <p className="mt-2 text-sm italic text-muted">{paper.publisher}</p>
          </div>

          {/* Phones: small first-page preview beside the title (the big one is hidden below sm) */}
          {hasLink ? (
            <a href={paper.link} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true" className="flex-shrink-0 sm:hidden">
              {thumb}
            </a>
          ) : (
            <div className="flex-shrink-0 sm:hidden">{thumb}</div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <button
            onClick={() => setShowAbstract(!showAbstract)}
            aria-expanded={showAbstract}
            aria-controls={abstractId}
            className="font-medium text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
          >
            {showAbstract ? 'Hide abstract' : 'Abstract'}
          </button>
          {hasLink && (
            <a
              href={paper.link}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-0.5 font-medium text-accent hover:underline underline-offset-4"
            >
              View paper <ArrowUpRight size={14} />
            </a>
          )}
          <span className="text-faint">{paper.tags.join(' · ')}</span>
        </div>

        {showAbstract && (
          <p id={abstractId} className="mt-4 max-w-2xl border-l-2 border-accent/40 pl-4 text-[15px] leading-relaxed text-muted">
            {paper.abstract}
          </p>
        )}
      </div>

      <div className="hidden sm:block">
        {hasLink ? (
          <a href={paper.link} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true" className="group block">
            {cover}
          </a>
        ) : (
          cover
        )}
      </div>
    </li>
  );
};

const Research: React.FC = () => {
  const pending = RESEARCH_PAPERS.filter((p) => isPending(p.date)).length;

  return (
    <Section id="research" label="Research" title="Research">
      <p className="-mt-6 mb-8 md:mb-10 text-sm text-muted">
        {RESEARCH_PAPERS.length} papers · {RESEARCH_PAPERS.length - pending} published · {pending} in progress
      </p>
      <ol className="divide-y divide-rule">
        {RESEARCH_PAPERS.map((paper) => (
          <PaperRow key={paper.id} paper={paper} />
        ))}
      </ol>
    </Section>
  );
};

export default Research;
