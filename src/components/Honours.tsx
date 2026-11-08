import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import Section from './Section';

// Text-only list: year, then the honour and its distinction
const Honours: React.FC = () => (
  <Section id="honours" label="Honours" title="Honours & achievements">
    <ul className="grid border-t border-rule sm:grid-cols-2 sm:gap-x-10">
      {ACHIEVEMENTS.map((item) => {
        const [name, distinction] = item.title.split('|').map((part) => part.trim());
        return (
          <li key={item.id} className="grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 border-b border-rule py-5">
            <span className="font-mono text-xs tracking-wider text-faint">{item.year}</span>
            <div>
              <p className="text-[15px] font-medium leading-snug text-ink">{name}</p>
              {distinction && <p className="mt-0.5 text-sm text-accent">{distinction}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  </Section>
);

export default Honours;
