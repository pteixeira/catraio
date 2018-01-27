class S3
  def initialize
    @client = Aws::S3::Client.new(
      region: ENV.fetch("S3_REGION"),
      credentials: Aws::Credentials.new(ENV.fetch("S3_ACCESS_KEY_ID"), ENV.fetch("S3_SECRET_ACCESS_KEY")),
    )
  end

  def list(folder)
    @client.list_objects_v2(
      bucket: ENV["S3_BUCKET_NAME"],
      prefix: folder,
    )
  end

  def url(prefix, filename)
    [
      "https://",
      ENV.fetch("S3_BUCKET_NAME"),
      ".s3.amazonaws.com/",
      prefix,
      filename,
    ].compact.join
  end
end
