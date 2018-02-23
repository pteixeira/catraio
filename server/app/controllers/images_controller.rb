class ImagesController < ApplicationController

  def gallery
    s3_client = S3.new
    images = s3_client.list("gallery/thumbs/").contents

    urls = images
      .map(&:key)
      .select{ |filename| filename.end_with?(".jpg") }
      .map do |path|
        filename = path.split("/").last

        {
          thumb: s3_client.url("gallery/thumbs/", filename),
          large: s3_client.url("gallery/large/", filename),
          full: s3_client.url("gallery/", filename),
        }
      end

    render json: urls.shuffle
  end

  def press
    s3_client = S3.new
    images = s3_client.list("press/thumbs/").contents

    urls = images
      .map(&:key)
      .select{ |filename| filename.end_with?(".jpg") }
      .map do |path|
        filename = path.split("/").last

        {
          thumb: s3_client.url("press/thumbs/", filename),
          large: s3_client.url("press/large/", filename),
          full: s3_client.url("press/", filename),
        }
      end

    render json: urls.shuffle
  end

end
