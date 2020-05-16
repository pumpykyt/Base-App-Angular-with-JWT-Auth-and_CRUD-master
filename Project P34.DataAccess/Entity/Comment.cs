using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Project_P34.DataAccess.Entity
{
    public class Comment
    {
        [Key]
        public int Id { get; set; }
        public string text { get; set; }
        public int ArticleId { get; set; }
        [ForeignKey("ArticleId")]
        public virtual NewsArticle NewsArticle { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
    }
}
