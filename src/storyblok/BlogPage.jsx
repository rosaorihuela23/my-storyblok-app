import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

export default function BlogPage({ blok }) {
  const body = blok.body || [];
  const output = [];

  let i = 0;
  while (i < body.length) {
    const nestedBlok = body[i];

    // Check if current and next block are both ImageBlocks
    if (
      nestedBlok.component === 'image_block' &&
      body[i + 1]?.component === 'image_block'
    ) {
      // Render two ImageBlocks side by side
      output.push(
        <div
          key={`${nestedBlok._uid}-${body[i + 1]._uid}`}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: '0 1 45%' }}>
            <StoryblokComponent blok={nestedBlok} />
          </div>
          <div style={{ flex: '0 1 45%' }}>
            <StoryblokComponent blok={body[i + 1]} />
          </div>
        </div>
      );
      i += 2; // skip next block since we already rendered it
    } else {
      // Render normal block full width
      output.push(
        <div key={nestedBlok._uid}>
          <StoryblokComponent blok={nestedBlok} />
        </div>
      );
      i += 1;
    }
  }

  return <main {...storyblokEditable(blok)}>{output}</main>;
}
