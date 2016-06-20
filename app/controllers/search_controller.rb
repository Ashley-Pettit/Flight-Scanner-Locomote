# module Api
#   module V1
    class SearchController < ApplicationController

      def search
        #Do this request
        # flight_search/QF?q=params[:search_input]
        # Example request: flight_search/QF?date=2016-09-02&from=SYD&to=JFK

        # Store the info into @search_results
        #render as json so front-end can get it

        render json: @search_results.to_json, status: 200
      end

    end
#   end
# end

  # flight_search/:airline_code
  # Provides a list of airlines.
  # URL parameters:
  # airline_code - airline code from the airlines endpoint

  # Query parameters:
  # date departure date, YYYY-MM-DD
  # from origin airport code, eg: SYD
  # to destination airport code, eg: JFK

  # Example request: flight_search/QF?date=2016-09-02&from=SYD&to=JFK


end
