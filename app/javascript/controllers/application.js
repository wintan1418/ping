import { Application } from "@hotwired/stimulus"
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "controllers"
import "@hotwired/turbo-rails"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }


Rails.start()
Turbolinks.start()
ActiveStorage.start()
