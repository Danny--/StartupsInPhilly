class StartupsController < ApplicationController
  def index
    @startups = Startup.find(:all, order: 'name')
    @first = Startup.first;
  end
end
