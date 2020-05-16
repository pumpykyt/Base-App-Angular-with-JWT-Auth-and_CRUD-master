using System;
using System.Collections.Generic;
using System.Text;

namespace Project_P34.DTO.Models
{
    public class NewsArticleDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public string ArticleText { get; set; }
    }
}
