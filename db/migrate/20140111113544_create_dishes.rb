class CreateDishes < ActiveRecord::Migration
  def change
    create_table :dishes do |t|
      t.string :name
      t.integer :price
      t.integer :party_id

      t.timestamps
    end
  end
end
