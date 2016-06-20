# module Api
#   module V1
      class AirportsController < ApplicationController
        def index
          @city = "Melbourne"
          @airports = JSON.parse(open("http://node.locomote.com/code-task/airports?q=#{@city}").read);
          if (true)
            render json: @airports.to_json, status: 200
          elsif (false)
            render json: {message: 'Resource not found'}, status: 404
          end
        end
      end
#   end
# end


# Query parameters:
# q - text based search param
# The airportCode from the response is required for the flight search.
# Example request: airports?q=Melbourne
