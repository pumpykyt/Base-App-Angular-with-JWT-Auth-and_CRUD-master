using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Project_IDA.DTO.Models.Result;
using Project_P34.DataAccess;
using Project_P34.DataAccess.Entity;
using Project_P34.DTO.Models;

namespace Project_P34.API_Angular.Controllers
{
    [Route("api/usermanager")]
    [ApiController]
    public class UserManagerController : ControllerBase
    {
        private readonly EFContext _context;
        private readonly UserManager<User> _userManager;

        public UserManagerController(EFContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpGet]
        public IEnumerable<UserItemDTO> getUser()
        {
            List<UserItemDTO> data = new List<UserItemDTO>();
            

            var dataFromDB = _context.Users.Where(t=> t.Email != "admin@gmail.com").ToList();
            foreach(var item in dataFromDB)
            {
                var mi = _context.userMoreInfos.FirstOrDefault(t => t.Id == item.Id);
                UserItemDTO tmp = new UserItemDTO();
                tmp.Email = item.Email;
                tmp.Id = item.Id;
                tmp.Phone = item.PhoneNumber;
                if (mi != null)
                {
                    tmp.fullName = mi.FullName;
                    tmp.Age = mi.Age;
                    tmp.Address = mi.Address;
                }
                data.Add(tmp);
            }
            return data;
        }

        [HttpPost("removeuser/{id}")]
        public ResultDto RemoveUser([FromRoute]string id)
        {
            try
            {
                var user = _context.Users.FirstOrDefault(t => t.Id == id);
                var mi = _context.userMoreInfos.FirstOrDefault(t => t.Id == id);

                _context.Users.Remove(user);
                if (mi != null)
                {
                    _context.userMoreInfos.Remove(mi);
                }
                _context.SaveChanges();
                return new ResultDto
                {
                    Status = 200,
                    Message = "OK"
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

    }
}