// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import { visit } from 'unist-util-visit';

// Custom remark plugin to handle external links
function remarkExternalLinks() {
  return (tree) => { 
    visit(tree, 'link', (node) => {
      if (/^(https?):\/\/[^\s/$.?#].[^\s]*$/i.test(node.url) && !node.url.includes('brggs.co.uk')) {
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.target = '_blank';
        node.data.hProperties.rel = 'noopener noreferrer';
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkExternalLinks],
  }
});
