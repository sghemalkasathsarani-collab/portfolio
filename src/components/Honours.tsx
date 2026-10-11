import React from 'react';
import { Award } from 'lucide-react';
import { ACHIEVEMENTS, LEADERSHIP, VOLUNTEERING } from '../constants';
import type { Activity } from '../types';
import Section from './Section';

const ActivityList: React.FC<{ heading: string; items: Activity[] }> = ({ heading, items }) => (
  <div>
    <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{heading}</h3>
    <ul className="divide-y divide-rule border-y border-rule">
      {items.map((item) => (
        <li key={`${item.role}-${item.org}`} className="flex items-baseline justify-between gap-4 py-3">
          <span className="min-w-0 text-[15px] leading-snug">
            <span className="text-ink">{item.role}</span>
            <span className="text-muted"> · {item.org}</span>
          </span>
          <span className="flex-shrink-0 font-mono text-xs text-faint">{item.period}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Honours: React.FC = () => (
  <Section id="honours" label="Honours" title="Achievements & leadership">
    <ul className="grid gap-4 sm:grid-cols-3">
      {ACHIEVEMENTS.map((item) => (
        <li key={item.title} className="flex flex-col rounded-sm border border-rule bg-card p-5">
          <Award size={20} className="text-accent" />
          <p className="mt-4 font-mono text-xs text-faint">{item.year}</p>
          <h3 className="mt-1 text-[15px] font-medium leading-snug text-ink">{item.title}</h3>
          <p className="mt-1 text-sm text-muted">{item.org}</p>
          <p className="mt-auto pt-4 text-sm font-medium text-accent">{item.distinction}</p>
        </li>
      ))}
    </ul>

    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <ActivityList heading="Leadership & extracurricular" items={LEADERSHIP} />
      <ActivityList heading="Volunteering & memberships" items={VOLUNTEERING} />
    </div>
  </Section>
);

export default Honours;
