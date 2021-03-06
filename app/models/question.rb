class Question < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :survey
  has_many :choices, :dependent => :delete_all
  has_many :responses, through: :choices

end
