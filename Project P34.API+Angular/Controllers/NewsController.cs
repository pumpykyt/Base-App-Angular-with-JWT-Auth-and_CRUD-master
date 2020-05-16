using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/newsmanager")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly EFContext _context;
        public NewsController(EFContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public ResultDto addNews([FromBody]NewsArticleDTO model)
        {
            NewsArticle obj = new NewsArticle();
            obj.Title = model.Title;
            obj.ImageUrl = model.ImageUrl;
            obj.ArticleText = model.ArticleText;
            _context.newsArticles.Add(obj);
            _context.SaveChanges();

            return new ResultDto
            {
                Message = "Posted",
                Status = 200
            };
        }

        [HttpGet]
        public IEnumerable<NewsArticleDTO> getUser()
        {
            List<NewsArticleDTO> data = new List<NewsArticleDTO>();


            var dataFromDB = _context.newsArticles.ToList();
            foreach (var item in dataFromDB)
            {
                NewsArticleDTO tmp = new NewsArticleDTO();
                tmp.Id = item.Id;
                tmp.Title = item.Title;
                tmp.ImageUrl = item.ImageUrl;
                tmp.ArticleText = item.ArticleText;
                data.Add(tmp);
            }
            return data;
        }
    }
}