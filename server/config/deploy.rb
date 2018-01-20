# config valid for current version and patch releases of Capistrano
lock "~> 3.10.1"

server 'catraio.pt', port: 22, roles: [:web, :app, :db], primary: true

set :repo_url,        'git@github.com:pteixeira/catraio.git'
set :repo_tree,       'server/'
set :branch,          'master'
set :application,     'api'
set :user,            'deploy'
set :puma_threads,    [4, 16]
set :puma_workers,    2

# Don't change these unless you know what you're doing
set :pty,             true
set :use_sudo,        false
set :stage,           :production
set :deploy_via,      :remote_cache
set :deploy_to,       "/home/#{fetch(:user)}/#{fetch(:application)}"
set :puma_bind,       "unix://#{shared_path}/tmp/sockets/#{fetch(:application)}-puma.sock"
set :puma_state,      "#{shared_path}/tmp/pids/puma.state"
set :puma_pid,        "#{shared_path}/tmp/pids/puma.pid"
set :puma_access_log, "#{release_path}/log/puma.error.log"
set :puma_error_log,  "#{release_path}/log/puma.access.log"
set :ssh_options,     { user: fetch(:user) }
set :puma_preload_app, true
set :puma_worker_timeout, nil
set :puma_init_active_record, true  # Change to false when not using ActiveRecord

# disable asset precompilation
set :assets_roles, []

## Linked Files & Directories (Default None):
# set :linked_files, %w{config/database.yml}
set :linked_dirs,  %w{bin log tmp/pids tmp/cache tmp/sockets tmp/pids vendor/bundle public/system}

namespace :deploy do
  # Stub
  namespace :assets do
    task :precompile do
      puts "Skipped assets:precompile"
    end
  end

  desc "Copies ignored config/secrets.production.yml to shared folder as secrets.yml"
  task :copy_secrets do
    on roles(:app) do
      upload! "config/secrets.production.yml", "#{release_path}/config/secrets.yml"
      upload! ".env.production", "#{release_path}/.env"
    end
  end

  desc "Make sure local git is in sync with remote."
  task :check_revision do
    on roles(:app) do
      unless `git rev-parse HEAD` == `git rev-parse origin/#{fetch(:branch)}`
        puts "WARNING: HEAD is not the same as origin/master"
        puts "Run `git push` to sync changes."
        exit
      end
    end
  end

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      invoke 'puma:restart'
    end
  end

  # before :starting,     :check_revision
  after  :finishing,    :copy_secrets
  after  :finishing,    :cleanup
  after  :finishing,    :restart
end

# ps aux | grep puma    # Get puma pid
# kill -s SIGUSR2 pid   # Restart puma
# kill -s SIGTERM pid   # Stop puma
