class CreateBeers < ActiveRecord::Migration
  def change
    create_table :beers do |t|
      t.string :brand
      t.string :name
      t.string :style
      t.float :abv
      t.string :country
      t.string :city
      t.string :string

      t.timestamps null: false
    end
  end
end
