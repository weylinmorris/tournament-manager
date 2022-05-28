Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html\
  root "tournaments#index"

  resources :tournaments, :caddies
  post '/tournament/add-caddie/:tournament_id/:caddie_id', to: 'tournaments#add_caddie'
  post '/tournament/remove-caddie/:tournament_id/:caddie_id', to: 'tournaments#remove_caddie'
end
