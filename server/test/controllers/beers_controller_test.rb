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

require 'test_helper'

class BeersControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
