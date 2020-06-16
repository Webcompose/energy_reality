# How To Generate the Book

You can generate the e-book files manually with Asciidoctor.
If you run the following you _may_ actually get HTML, Epub, Mobi and PDF output files:

```bash
$ bundle install
$ bundle exec rake book:build
Converting to HTML...
 -- HTML output at progit.html
Converting to EPub...
 -- Epub output at progit.epub
Converting to Mobi (kf8)...
 -- Mobi output at progit.mobi
Converting to PDF...
 -- PDF output at progit.pdf
```