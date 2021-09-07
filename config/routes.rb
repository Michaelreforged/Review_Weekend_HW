Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/computers', to:'computers#index'
    post '/computers', to:'computers#create'
    put '/computers/:id', to:'computers#update'
    patch '/computers/:id', to:'computers#update'
    delete '/computers/:id', to:'computers#destroy'
  end

end
