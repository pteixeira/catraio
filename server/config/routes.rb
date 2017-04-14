Rails.application.routes.draw do
  mount Knock::Engine => "/auth"

  resources :beers , only: %i(index create update destroy)
  put "taps/move", to: "taps#move"
  resources :taps  , only: %i(index create update destroy)
  resources :events, only: %i(index)

  get 'events/past', to: 'events#pastevents'
  get "/me", to: "users#me"
  post "/sendmail", to: "sendmail#index"
  get "/newbeers", to: "newbeers#index"
end
