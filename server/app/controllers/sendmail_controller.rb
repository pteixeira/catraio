require 'mailgun'

class SendmailController < ApplicationController
  def index

    mg_client = Mailgun::Client.new ENV["MAILGUN_API_TOKEN"]


    puts malho

    sender = params[:content][:name]

    # Define your message parameters
    message = <<-MSG
      Name: #{sender}<br />
      Phone: #{params[:content][:phone]}<br />
      Message:<br /> #{params[:content][:message]}
    MSG


    message_params = {
      :from    => params[:content][:email],
      :to      => ENV["EMAIL_RECIPIENT"],
      :subject => "[catraio.pt] Mensagem de $#{sender}",
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
  def malho
    params.require(:content).permit(
      :name,
      :email,
      :phone,
      :message
    )
  end
end
