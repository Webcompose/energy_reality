http://tom.medak.click/en/workflows/


https://www.portent.com/blog/copywriting/content-strategy/content-with-github-markdown.htm

https://michelf.ca/projects/php-markdown/

https://parsedown.org

This one converts your book online

https://leanpub.com/manual/read?#leanpub-auto-reasons-to-use-github-or-bitbucket

This ones different. They are a service for building documents but this page is still useful

https://docs.gitbook.com/getting-started/quick-start


From Arthur Attwell arthurattwell.com

Markdown is an excellent shortcut to HTML, especially for non-technical writers and editors. Some publishing services (Leanpub, Gitbook, PenFlip and others) make the most of this.

The drawback with most markdown-based publishing services currently is that they use flavours of markdown that don't support classes (technically, 'attribute definitions' for elements). That is, you can't use classes to distinguish, say, an epigraph from a dedication, or a normal blockquote from a 'box' blockquote. Without classes, you cannot reproduce the typography required for high-quality books more complex than a novel.

For attribute support, the best flavour of markdown to use is probably kramdown. Jekyll, and therefore GitHub Pages, support kramdown by default.

I use Jekyll to create book-ready HTML from markdown for clients, using this workflow we developed for our own book-production work. Used with Sigil for ebook assembly and PrinceXML for PDF output, we're producing book interiors as good as anything we get from InDesign.

