Rails.application.routes.draw do
  mount Knock::Engine => "/auth"
  resources :beers , only: %i(index)
  resources :taps  , only: %i(index create update destroy)
  resources :events, only: %i(index)
  get 'events/past', to: 'events#pastevents'
end
