import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RESEARCH } from '../constants';
import type { ResearchProject } from '../types';
import Section from './Section';

const STATUS = {
  published: { label: 'Published', dot: 'bg-ok', text: 'text-ok' },
  ongoing: { label: 'In progress', dot: 'bg-warn', text: 'text-warn' },
  academic: { label: 'Undergraduate', dot: 'bg-faint', text: 'text-muted' },
} as const;

const ProjectRow: React.FC<{ project: ResearchProject }> = ({ project }) => {
  const status = STATUS[project.status];

  return (
    <li className={`grid gap-5 py-8 first:pt-0 sm:py-10 ${project.image ? 'sm:grid-cols-[1fr_220px] sm:gap-10 lg:grid-cols-[1fr_300px]' : ''}`}>
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className={`inline-flex items-center gap-1.5 font-medium ${status.text}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
            {status.label}
          </span>
          <span className="text-rule">/</span>
          <span className="font-mono text-xs uppercase tracking-wider text-faint">{project.date}</span>
          <span className="text-rule">/</span>
          <span className="text-faint">{project.place}</span>
        </div>

        <h3 className="max-w-3xl font-serif text-xl leading-snug text-ink md:text-[1.4rem]">{project.title}</h3>
        {project.venue && <p className="mt-2 text-sm italic text-accent">{project.venue}</p>}

        <div className="mt-3 max-w-2xl space-y-2 text-[15px] leading-relaxed text-muted">
          {project.summary.map((line) => (
            <p key={line.slice(0, 24)}>{line}</p>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-full bg-wash px-2.5 py-0.5 text-xs text-muted">
              {tool}
            </span>
          ))}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-0.5 text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Read more <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      {project.image && (
        <div className="overflow-hidden rounded-sm border border-rule bg-wash">
          <img src={project.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </div>
      )}
    </li>
  );
};

const Research: React.FC = () => {
  const industry = RESEARCH.filter((p) => p.status !== 'academic');
  const academic = RESEARCH.filter((p) => p.status === 'academic');

  return (
    <Section id="research" label="Research" title="Research & projects">
      <p className="-mt-6 mb-8 text-sm text-muted md:mb-10">
        BIM, digital twin and reality-capture research at CESL, plus design projects from university.
      </p>
      <ol className="divide-y divide-rule">
        {industry.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </ol>

      <h3 className="mt-12 mb-2 border-t border-rule pt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-faint md:mt-16">
        University projects
      </h3>
      <ol className="divide-y divide-rule">
        {academic.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </ol>
    </Section>
  );
};

export default Research;
