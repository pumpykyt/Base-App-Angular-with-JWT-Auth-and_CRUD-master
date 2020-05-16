using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/commentmanager")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly EFContext _context;

        public CommentController(EFContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public ResultDto addComment([FromBody]CommentDTO model)
        {
            try
            {
                Comment obj = new Comment();
                obj.User = _context.Users.FirstOrDefault(t => t.Id == model.UserId);
                obj.text = model.text;
                obj.NewsArticle = _context.newsArticles.FirstOrDefault(t => t.Id == model.ArticleId);
                _context.comments.Add(obj);
                _context.SaveChanges();

                return new ResultDto
                {
                    Message = "Posted",
                    Status = 200
                };
            }
            catch (Exception ex)
            {
                List<string> temp = new List<string>();
                temp.Add(ex.Message);
                return new ResultErrorDto
                {
                    Status = 500,
                    Message = "ERROR",
                    Errors = temp
                };
            }
        }

        [HttpGet]
        public IEnumerable<CommentDTO> getAllComments()
        {
            List<CommentDTO> data = new List<CommentDTO>();

            foreach (var el in _context.comments.ToList())
            {
                CommentDTO temp = new CommentDTO();
                temp.UserId = el.UserId;
                temp.ArticleId = el.ArticleId;
                temp.text = el.text;
                data.Add(temp);
            }

            return data;
        }

        [HttpGet("get/{id}")]
        public IEnumerable<CommentDTO> getCommentsByArticleId([FromRoute]int id)
        {
            List<CommentDTO> data = new List<CommentDTO>();

            foreach (var el in _context.comments.ToList())
            {
                if (el.ArticleId == id)
                {
                    CommentDTO temp = new CommentDTO();
                    temp.Id = el.Id;
                    temp.UserId = el.UserId;
                    temp.ArticleId = el.ArticleId;
                    temp.text = el.text;
                    data.Add(temp);
                }
            }

            return data;
        }

        [HttpGet("get/comment/{id}")]
        public string getUserNameByCommentId([FromRoute]int id)
        {
            var userId = _context.comments.FirstOrDefault(t => t.Id == id).UserId;
            string data = _context.Users.FirstOrDefault(t => t.Id == userId).Email;
            return data;
        }
    }
}