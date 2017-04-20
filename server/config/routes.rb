Rails.application.routes.draw do
  mount Knock::Engine => "/auth"

  resources :beers , only: %i(index)
  resources :events, only: %i(index)

  get 'events/past', to: 'events#pastevents'
  get "/me", to: "users#me"
  post "/sendmail", to: "sendmail#index"
  get "/taps", to: "taps#index"
end
