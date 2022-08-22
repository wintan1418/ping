class PingController < ApplicationController
    def ping
      render status: :ok, body: "PONG"
    end
  end