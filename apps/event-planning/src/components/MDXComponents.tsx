import React from 'react';

import { cn } from '../utils/classUtils';

// Reference from shadcn: https://github.com/shadcn-ui/taxonomy/blob/main/components/mdx-components.tsx
export const MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={cn('my-10 text-[32px] font-bold tracking-tighter', className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn('mt-10 pb-1 text-[18px] font-[700] tracking-tighter first:mt-0', className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={cn('mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={cn('mt-8 scroll-m-20 text-base font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn('font-medium text-blue-500 underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn('text-[16px] font-[400] leading-[24px] tracking-[-0.016em]', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={cn('my-6 ml-6 list-disc leading-[24px] tracking-[-0.016em]', className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn('mt-2 leading-[24px] tracking-[-0.016em]', className)} {...props} />
  ),
  strong: ({ className, ...props }) => (
    <strong className={cn('ml-[20px] font-semibold', className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn('[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  // hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('even:bg-muted m-0 border-t p-0', className)} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn('mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4', className)}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn('relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm', className)}
      {...props}
    />
  ),
};
