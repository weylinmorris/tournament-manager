Rails.application.routes.draw do
  get '/api/v1/tournaments', to: 'tournaments#index'
  get '/api/v1/tournaments/:id', to: 'tournaments#show'
  post '/api/v1/tournaments', to: 'tournaments#create'
  put '/api/v1/tournaments/:id', to: 'tournaments#update'
  delete '/api/v1/tournaments/:id', to: 'tournaments#destroy'
  post '/api/v1/tournament/add-caddie/:tournament_id/:caddie_id', to: 'tournaments#add_caddie'
  post '/api/v1/tournament/remove-caddie/:tournament_id/:caddie_id', to: 'tournaments#remove_caddie'

  get '/api/v1/caddies', to: 'caddies#index'
  get '/api/v1/caddies/:id', to: 'caddies#show'
  post '/api/v1/caddies', to: 'caddies#create'
  put '/api/v1/caddies/:id', to: 'caddies#update'
  delete '/api/v1/caddies/:id', to: 'caddies#destroy'

  get '*path', to: "global#index"
end
