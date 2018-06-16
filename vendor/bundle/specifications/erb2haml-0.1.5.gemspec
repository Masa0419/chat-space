# -*- encoding: utf-8 -*-
# stub: erb2haml 0.1.5 ruby lib

Gem::Specification.new do |s|
  s.name = "erb2haml"
  s.version = "0.1.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["David Leung"]
  s.date = "2013-04-20"
  s.description = "erb2haml gives Rails simple rake tasks to convert all ERB view templates to Haml."
  s.email = ["david@davidslab.com"]
  s.extra_rdoc_files = ["LICENSE", "README.md", "CHANGELOG.md"]
  s.files = ["CHANGELOG.md", "LICENSE", "README.md"]
  s.homepage = "https://github.com/dhl/erb2haml"
  s.rubygems_version = "2.5.1"
  s.summary = "ERB to Haml view templates conversion for Rails."

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<html2haml>, [">= 0"])
    else
      s.add_dependency(%q<html2haml>, [">= 0"])
    end
  else
    s.add_dependency(%q<html2haml>, [">= 0"])
  end
end
