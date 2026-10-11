import React from 'react';
import { EDUCATION } from '../constants';
import Section from './Section';

const Education: React.FC = () => (
  <Section id="education" label="Education" title="Education">
    <ul className="divide-y divide-rule border-y border-rule">
      {EDUCATION.map((item) => (
        <li key={item.degree} className="grid gap-1 py-6 md:grid-cols-[140px_1fr] md:gap-8">
          <p className="font-mono text-xs leading-7 text-faint">{item.period}</p>
          <div>
            <h3 className="font-serif text-xl leading-snug text-ink">{item.degree}</h3>
            <p className="mt-0.5 text-[15px] text-muted">{item.school}</p>
            <p className="mt-2 text-sm font-medium text-accent">{item.result}</p>
            {item.details && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.details}</p>}
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default Education;
