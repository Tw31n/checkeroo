class CreateOrderItems < ActiveRecord::Migration
  def change
    create_table :order_items do |t|
      t.integer :user_id
      t.integer :dish_id

      t.timestamps
    end
  end
end
