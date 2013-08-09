class CreateStartups < ActiveRecord::Migration
  def change
    create_table :startups do |t|
      t.string :name
      t.email :website
      t.string :x
      t.string :y

      t.timestamps
    end
  end
end
