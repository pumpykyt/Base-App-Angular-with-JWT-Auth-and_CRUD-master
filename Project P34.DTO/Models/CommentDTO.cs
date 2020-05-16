using System;
using System.Collections.Generic;
using System.Text;

namespace Project_P34.DTO.Models
{
    public class CommentDTO
    {
        public int Id { get; set; }
        public string text { get; set; }
        public int ArticleId { get; set; }
        public string UserId { get; set; }
    }
}
