class StartupsController < ApplicationController
  def index
    @startups = Startup.find(:all, order: 'name')
  end
end
