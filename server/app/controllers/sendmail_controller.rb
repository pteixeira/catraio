require 'mailgun'

class SendmailController < ApplicationController
  def index

    mg_client = Mailgun::Client.new ENV["MAILGUN_API_TOKEN"]

    # Define your message parameters
    message = <<-MSG
      Name: #{params[:content][:name]}<br />
      Phone: #{params[:content][:phone]}<br />
      Message:<br /> #{params[:content][:message]}
    MSG

    message_params = {
      :from    => params[:content][:email],
      :to      => ENV["EMAIL_RECIPIENT"],
      :subject => params[:content][:subject],
      :html    => message
    }

    begin
      # Send your message through the client
      mg_client.send_message ENV["MAILGUN_DOMAIN"], message_params
    rescue Mailgun::CommunicationError
      render json: {"status": "ERROR"}, status: :invalid and return
    else
      render json: {}, status: :ok
    end
  end

  private
  def content
    params.require(:content).permit(
      :name,
      :email,
      :phone,
      :subject,
      :message
    )
  end
end
