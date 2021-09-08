Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/computers', to:'computers#index'
    post '/computers', to:'computers#create'
    put '/computers/:id', to:'computers#update'
    patch '/computers/:id', to:'computers#update'
    delete '/computers/:id', to:'computers#destroy'

    get '/computers/:computer_id/parts', to:'parts#index'
    post '/computers/:computer_id/parts', to:'parts#create'
    put '/computers/:computer_id/parts/:id', to:'parts#update'
    patch '/computers/:computer_id/parts/:id', to:'parts#update'
    delete '/computers/:computer_id/parts/:id', to:'parts#destroy'

  end

end
