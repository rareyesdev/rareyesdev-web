import { useEffect } from 'preact/hooks';

const rootTitle = 'rareyes.dev';

export function usePageTitle(title: string) {
  useEffect(() => {
    const fullTitle = title.length > 0 ? `${rootTitle} | ${title}` : rootTitle;
    document.title = fullTitle;
  }, [title]);
}
