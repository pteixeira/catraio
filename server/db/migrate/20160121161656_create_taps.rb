class CreateTaps < ActiveRecord::Migration
  def change
    create_table :taps do |t|
      t.string :brand
      t.string :name
      t.string :style
      t.float :abv
      t.string :country
      t.string :city
      t.float :half_price
      t.float :full_price
      t.integer :position

      t.timestamps null: false
    end
  end
end
