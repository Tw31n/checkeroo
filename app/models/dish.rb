class Dish < ActiveRecord::Base
    belongs_to :party
    has_many :order_items
    has_many :users, through: :order_items
end
