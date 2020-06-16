namespace :book do
  desc 'build basic book formats'
  task :build do

    begin
      version_string = ENV['TRAVIS_TAG'] || `git describe --tags`.chomp
      if version_string.empty?
        version_string = '0'
      end
      date_string = Time.now.strftime("%Y-%m-%d")
      params = "--attribute revnumber='#{version_string}' --attribute revdate='#{date_string}' --destination-dir='public'"
      # puts "Generating contributors list"
      # `git shortlog -s | grep -v -E "(Straub|Chacon)" | cut -f 2- | column -c 120 > book/contributors.txt`

      puts "Converting to HTML..."
      `bundle exec asciidoctor #{params} -a data-uri book/progit.asc`
      puts " -- HTML output at public/progit.html"

      puts "Converting to EPub..."
      `bundle exec asciidoctor-epub3 #{params} book/progit.asc`
      puts " -- Epub output at public/progit.epub"

      puts "Converting to Mobi (kf8)..."
      `bundle exec asciidoctor-epub3 #{params} -a ebook-format=kf8 book/progit.asc`
      puts " -- Mobi output at public/progit.mobi"

      puts "Converting to PDF... (this one takes a while)"
      `bundle exec asciidoctor-pdf #{params} book/progit.asc 2>/dev/null`
      puts " -- PDF output at public/progit.pdf"

    end
  end
end

task :default => "book:build"
