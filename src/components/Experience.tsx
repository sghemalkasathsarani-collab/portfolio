import React from 'react';
import { EXPERIENCE } from '../constants';
import Section from './Section';

const Experience: React.FC = () => (
  <Section id="experience" label="Experience" title="Work experience">
    <ol className="relative border-l border-rule">
      {EXPERIENCE.map((role, i) => (
        <li key={role.org} className="relative pb-10 pl-8 last:pb-0 md:pb-14">
          <span
            className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full ${
              i === 0 ? 'bg-accent ring-4 ring-accent-soft' : 'border border-faint bg-paper'
            }`}
          />
          <div className="grid gap-1 md:grid-cols-[140px_1fr] md:gap-8">
            <p className="font-mono text-xs leading-7 text-faint">{role.period}</p>
            <div>
              <h3 className="font-serif text-xl leading-snug text-ink">
                {role.title}
                <span className="text-muted"> · {role.org}</span>
              </h3>
              <p className="mt-0.5 text-sm text-faint">{role.place}</p>
              <ul className="mt-3 max-w-2xl space-y-2 text-[15px] leading-relaxed text-muted">
                {role.points.map((point) => (
                  <li key={point.slice(0, 24)} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent/60">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
