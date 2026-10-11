import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';

const Skills: React.FC = () => (
  <Section id="skills" label="Skills" title="Skills & tools">
    <dl className="divide-y divide-rule border-y border-rule">
      {SKILLS.map((category) => (
        <div key={category.title} className="grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8">
          <dt className="text-[15px] font-medium text-ink">{category.title}</dt>
          <dd className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-rule bg-card px-3 py-1 text-sm text-muted">
                {skill}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
