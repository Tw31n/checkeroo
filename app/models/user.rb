class User < ActiveRecord::Base
    has_many :participants
    has_many :dishes, through: :order_items
end
