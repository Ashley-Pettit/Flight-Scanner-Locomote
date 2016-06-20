# Side note is this code is a little silly as it merely turns the same JSON into
# the same JSON. It has no functional value. Shown merely to meet the tech spec
#
#
# module Api
#   module V1
    class AirlinesController < ApplicationController

      # Index is used as the RESTful convention for return all
      # Front-end will read "http://localhost:3000/airlines"
      def index
        @airlines = JSON.parse(open("http://node.locomote.com/code-task/airlines").read);
        render json: @airlines.to_json, status: 200
      end

    end
#   end
# end


# /airlines
# Provides a list of airlines. Takes no parameters.
# The airline codes from the response is required for the flight search.
# Example request: airlines


# JS example
# var xhr = new XMLHttpRequest();
# xhr.open("GET", "https://www.codecademy.com/", false);
# xhr.send()
# console.log(xhr.status);
# console.log(xhr.statusText);
