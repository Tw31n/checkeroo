class Party < ActiveRecord::Base
    has_many :dishes
    has_many :participants
end
