﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ShareList.Core;
using ShareList.Core.Repositories;
using ShareList.Core.Services;
using ShareList.Repository;
using ShareList.Services;

namespace ShareList
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => 
                {
                    options.TokenValidationParameters =new TokenValidationParameters{
                        ValidateIssuer=false,
                        ValidateAudience=false,
                        ValidateLifetime=true,
                        ValidateIssuerSigningKey=true,
                        ValidIssuer="",
                        ValidAudience="http://localhost",
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("AppConfiguration:SecurityKey").Value))
                    };
                    // options.RequireHttpsMetadata=false;
                });
            
            services.AddAuthorization(options=>{
                options.AddPolicy("Member",policy=>policy.RequireClaim("Membership"));                    
            });
            services.AddSingleton<IDbContext,DbContext>();
            
            services.AddSingleton<IUserRepository,UserRepository>();
            services.AddSingleton<IUserService,UserService>();

            services.AddSingleton<IListService,ListService>();
            services.AddSingleton<IListRepository,ListRepository>();
            services.AddMvc();

            services.Configure<Settings>(Options=>{
                Options.SecurityKey=Configuration.GetSection("AppConfiguration:SecurityKey").Value;
                Options.ConnectionString=Configuration.GetSection("MongoConnection:ConnectionString").Value;
                Options.Database=Configuration.GetSection("MongoConnection:Database").Value;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseMvc();
            //app.UseMvcWithDefaultRoute();
        }
    }
}
