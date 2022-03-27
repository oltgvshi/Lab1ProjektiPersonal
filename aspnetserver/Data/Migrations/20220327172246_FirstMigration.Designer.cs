﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using aspnetserver.Data;

#nullable disable

namespace aspnetserver.Data.Migrations
{
    [DbContext(typeof(AppDBContext))]
    [Migration("20220327172246_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.3");

            modelBuilder.Entity("aspnetserver.Data.Post", b =>
                {
                    b.Property<int>("PostId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasMaxLength(100000)
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.HasKey("PostId");

                    b.ToTable("Posts");

                    b.HasData(
                        new
                        {
                            PostId = 1,
                            Content = "Ky eshte posti 1 dhe eshte krijuar per projektin personal ne Lab 1.",
                            Title = "Post 1"
                        },
                        new
                        {
                            PostId = 2,
                            Content = "Ky eshte posti 2 dhe eshte krijuar per projektin personal ne Lab 1.",
                            Title = "Post 2"
                        },
                        new
                        {
                            PostId = 3,
                            Content = "Ky eshte posti 3 dhe eshte krijuar per projektin personal ne Lab 1.",
                            Title = "Post 3"
                        },
                        new
                        {
                            PostId = 4,
                            Content = "Ky eshte posti 4 dhe eshte krijuar per projektin personal ne Lab 1.",
                            Title = "Post 4"
                        },
                        new
                        {
                            PostId = 5,
                            Content = "Ky eshte posti 5 dhe eshte krijuar per projektin personal ne Lab 1.",
                            Title = "Post 5"
                        },
                        new
                        {
                            PostId = 6,
                            Content = "Ky eshte posti 6 dhe eshte krijuar per projektin personal ne Lab 1.",
                            Title = "Post 6"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
