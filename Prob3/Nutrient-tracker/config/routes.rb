Rails.application.routes.draw do
  get 'tutorial/index' => 'tutorial'

  resources :ratings
	root "nutrients#index"
  resources :nutrients
  devise_for :users
  get "journal_bydate" => "nutrients#journal_bydate"
  get "journal_byrating" => "nutrients#journal_byrating"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
