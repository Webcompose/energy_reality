namespace :book do
  desc 'build basic book formats'
  task :build do

    begin
      version_string = ENV['TRAVIS_TAG'] || `git describe --tags`.chomp
      if version_string.empty?
        version_string = '0'
      end
      date_string = Time.now.strftime("%Y-%m-%d")
      params = "--attribute revnumber='#{version_string}' \
        --attribute revdate='#{date_string}' \
        --destination-dir='public'"
      # puts "Generating contributors list"
      # `git shortlog -s | grep -v -E "(Straub|Chacon)" | cut -f 2- | column -c 120 > book/contributors.txt`

      puts "Converting to HTML..."
      `bundle exec asciidoctor #{params} -a data-uri --out-file='index.html' book/index.asc`
      puts " -- HTML output at public/index.html"

      puts "Converting to EPub..."
      `bundle exec asciidoctor-epub3 #{params} --out-file='energy-reality.epub' book/index.asc`
      puts " -- Epub output at public/energy-reality.epub"

      puts "Converting to Mobi (kf8)..."
      `bundle exec asciidoctor-epub3 #{params} -a ebook-format=kf8 --out-file='energy-reality.mobi' book/index.asc`
      puts " -- Mobi output at public/energy-reality.mobi"

      puts "Converting to PDF... (this one takes a while)"
      `bundle exec asciidoctor-pdf #{params} --out-file='energy-reality.pdf' book/index.asc 2>/dev/null`
      puts " -- PDF output at public/energy-reality.pdf"

    end
  end
end

task :default => "book:build"
