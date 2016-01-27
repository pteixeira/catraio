# == Schema Information
#
# Table name: taps
#
#  id         :integer          not null, primary key
#  brand      :string
#  name       :string
#  style      :string
#  abv        :float
#  country    :string
#  city       :string
#  half_price :float
#  full_price :float
#  position   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TapTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
