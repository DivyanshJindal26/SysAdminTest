FROM ruby:2.7

# Set the working directory inside the container
WORKDIR /src/app

# Copy Gemfile and Gemfile.lock first (for dependency installation)
COPY src/Gemfile src/Gemfile.lock ./

# Add Node.js installation
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Install Bundler and dependencies
RUN gem install bundler:1.16.0 && bundle _1.16.0_ install


# Copy the rest of the Rails project from the src directory
COPY src/ .

# Expose port 3000 for Rails
EXPOSE 3000

# Start the Rails server
CMD ["rails", "server", "-b", "0.0.0.0"]
