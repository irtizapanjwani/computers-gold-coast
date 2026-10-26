// Helpers for rendering the original (not yet redesigned) service pages inside the new
// layout. Each of those pages stores its <head> and <body> as HTML strings in
// src/data/pages/*.json, with a page-wide <style> block that styles bare elements
// (body, h1, nav, footer, section...). We keep that CSS, but scope every rule to the
// legacy body wrapper so it can't leak into the new header, hero or footer.

/** Prefix every selector in `css` with `scope`. Handles @media/@supports (recursively);
 *  leaves @keyframes, @font-face and other at-rules untouched. */
export function scopeCss(css: string, scope: string): string {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  let out = '';
  let i = 0;
  while (i < css.length) {
    const open = css.indexOf('{', i);
    const semi = css.indexOf(';', i);
    if (open === -1) break;
    // Statement at-rule such as @import ...;
    if (semi !== -1 && semi < open && css.slice(i, semi).trim().startsWith('@')) {
      out += css.slice(i, semi + 1);
      i = semi + 1;
      continue;
    }
    const prelude = css.slice(i, open).trim();
    let depth = 1;
    let j = open + 1;
    while (j < css.length && depth > 0) {
      if (css[j] === '{') depth++;
      else if (css[j] === '}') depth--;
      j++;
    }
    const inner = css.slice(open + 1, j - 1);
    if (/^@(media|supports|container|layer)\b/.test(prelude)) {
      out += `${prelude}{${scopeCss(inner, scope)}}`;
    } else if (prelude.startsWith('@')) {
      out += `${prelude}{${inner}}`;
    } else if (prelude) {
      const sel = prelude
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => scopeSelector(s, scope))
        .join(',');
      out += `${sel}{${inner}}`;
    }
    i = j;
  }
  return out;
}

function scopeSelector(sel: string, scope: string): string {
  if (sel === ':root' || sel === 'html' || sel === 'body') return scope;
  if (sel === '*') return `${scope},${scope} *`;
  const m = sel.match(/^(html|body)\s+(.*)$/);
  if (m) return `${scope} ${m[2]}`;
  return `${scope} ${sel}`;
}

/** Split a legacy page's headHtml into the CSS (scoped) and the remaining tags we keep
 *  (title, meta, canonical, JSON-LD). Charset/viewport and the old Google Fonts links
 *  are dropped because the new layout provides its own. */
export function splitLegacyHead(headHtml: string, scope: string) {
  let css = '';
  let head = headHtml.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (_, c: string) => {
    css += c;
    return '';
  });
  head = head
    .replace(/<meta\s+charset[^>]*>/gi, '')
    .replace(/<meta\s+name="viewport"[^>]*>/gi, '')
    .replace(/<link[^>]*fonts\.(googleapis|gstatic)\.com[^>]*>/gi, '');
  // The new layout loads Manrope, not Inter.
  css = css.replace(/'Inter'/g, "'Manrope'");
  return { head: head.trim(), css: scopeCss(css, scope) };
}

/** Remove the old dark hero (the first <section class="hero">) from a legacy body. */
export function stripLegacyHero(bodyHtml: string): string {
  return bodyHtml.replace(/<section class="hero">[\s\S]*?<\/section>/, '');
}
