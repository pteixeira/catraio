# == Schema Information
#
# Table name: beers
#
#  id         :integer          not null, primary key
#  brand      :string
#  name       :string
#  style      :string
#  abv        :float
#  country    :string
#  city       :string
#  string     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Beer < ActiveRecord::Base
end
