class CreateParties < ActiveRecord::Migration
  def change
    create_table :parties do |t|
      t.string :name
      t.string :place
      t.date :date

      t.timestamps
    end
  end
end
