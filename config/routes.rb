Rails.application.routes.draw do
  get 'home/show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/ping", to: "ping#ping"
  root to: "home#show"
end
