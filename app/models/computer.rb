class Computer < ApplicationRecord
  has_many :parts, dependent: :destroy
end
