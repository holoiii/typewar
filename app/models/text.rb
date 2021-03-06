# Stupid storage mechanism for text that we can pre-process
class Text < ActiveRecord::Base
  VALID_CHARS = /[\w'\-\+]/
  INVALID_CHARS = /[^\w'\-\+]/

  def self.random(size)
  end

  def generate_library
#    Typewar::TextLibrary.new(content).generate
    output = []
    temp = ''
    words.each {|word|
      if(rand > 0.4)
        output << (temp.blank? ? word : temp.strip)
        temp = ''
      else
        temp += word + ' '
      end
    }
    output
  end

  def words
    content.
      split(INVALID_CHARS).
      map(&:strip).
      delete_if(&:blank?).
      uniq.
      delete_if{|word|
        !(word =~ /\w/)
    }
  end
end
