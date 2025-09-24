import { StoryblokComponent, storyblokEditable } from '@storyblok/react';


export default function BlogPage({ blok }) {
  const body = blok.body || [];


  const teaserBlocks = body.filter(b => b.component === 'teaser');
  const imageBlocks = body.filter(b => b.component === 'image_block');
  const otherBlocks = body.filter(
    b => b.component !== 'teaser' && b.component !== 'image_block'
  );

  const output = [];


  teaserBlocks.forEach(teaser => {
    output.push(
      <div key={teaser._uid} className="full-width-block">
        <StoryblokComponent blok={teaser} />
      </div>
    );
  });


  for (let i = 0; i < imageBlocks.length; i++) {
    const current = imageBlocks[i];
    const next = imageBlocks[i + 1];

    if (next) {
      output.push(
        <div
          key={`${current._uid}-${next._uid}`}
          className="image-pair"
        >
          <div className="image-wrapper">
            <StoryblokComponent blok={current} />
          </div>
          <div className="image-wrapper">
            <StoryblokComponent blok={next} />
          </div>
        </div>
      );
      i += 1; 
    } else {
      output.push(
        <div key={current._uid} className="full-width-block">
          <StoryblokComponent blok={current} />
        </div>
      );
    }
  }


  otherBlocks.forEach(b => {
    output.push(
      <div key={b._uid} className="full-width-block">
        <StoryblokComponent blok={b} />
      </div>
    );
  });

  return <main {...storyblokEditable(blok)}>{output}</main>;
}
