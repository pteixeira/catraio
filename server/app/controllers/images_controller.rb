class ImagesController < ApplicationController

  def gallery
    s3_client = S3.new
    image_count = s3_client.list("gallery/thumbs").contents.count

    urls = (image_count - 1).times.map do |i|
      {
        thumb: s3_client.url("gallery/thumbs/", i + 1),
        large: s3_client.url("gallery/large/", i + 1),
        full: s3_client.url("gallery/", i + 1),
      }
    end

    render json: urls.shuffle
  end

end
