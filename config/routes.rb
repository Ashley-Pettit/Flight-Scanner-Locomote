Rails.application.routes.draw do
  # namespace :api, defaults: {format: 'json'} do
  #   # namespace :v1 do

      resources :airlines
      resources :airports
      # resources :search

  #   end
  # end
end


# server location =>   http://www.example.com/api/v1/projects
