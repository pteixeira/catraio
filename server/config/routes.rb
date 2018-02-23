Rails.application.routes.draw do

  resources :events, only: %i(index)

  get 'events/past', to: 'events#past_events'
  get "/me", to: "users#me"
  post "/sendmail", to: "sendmail#index"
  get "/taps", to: "taps#index"
  get "/beers", to: "beers#index"
  get "/gallery", to: "images#gallery"
  get "/press", to: "images#press"
end
