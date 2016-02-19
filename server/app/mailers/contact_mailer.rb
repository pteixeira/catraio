class ContactMailer < ApplicationMailer
  default from:

  def sample_email(params)
    setup_email(params)
    mail(to: "pedro.ap.teixeira@gmail.com", subject: @subject)
  end

  private

  def setup_email(params)
    @name = params[:content][:name]
    @message = params[:content][:message]
    @subject = params[:content][:subject]
    @phone = params[:content][:phone]
    @email = params[:content][:email]
    @from = @email
    headers "reply-to" => @email
    @sent_on = Time.now
    @content_type = "text/html"
  end
end
