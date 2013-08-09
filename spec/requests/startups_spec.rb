require 'spec_helper'

describe "Startups" do
  describe "GET /startups" do
    it "should dispaly home page" do
      visit startups_path
      page.should have_content 'Startups in Philly'
    end
  end
end
