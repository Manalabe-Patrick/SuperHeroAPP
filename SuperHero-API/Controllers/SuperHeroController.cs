using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperHero_API.Data;

namespace SuperHero_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : Controller
    {
        private readonly DataContext _context;

        public SuperHeroController(DataContext context)
        {
            _context = context;
        }

        //get all superheroes
        [HttpGet]
        public async Task<ActionResult<List<SuperHero>>> GetSuperHeroes()
        {
            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        //add super hero
        [HttpPost]
        public async Task<ActionResult<List<SuperHero>>> AddSuperHeroes(SuperHero hero)
        {
             _context.SuperHeroes.Add(hero);
            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        //edit super hero
        [HttpPut]
        public async Task<ActionResult<List<SuperHero>>> UpdateSuperHeroes(SuperHero hero)
        {
            var dbHero = await _context.SuperHeroes.FindAsync(hero.Id);
            if(dbHero== null)
            {
                return BadRequest("Hero not found. ");
            }

            dbHero.Name = hero.Name;
            dbHero.FirstName = hero.FirstName;
            dbHero.LastName = hero.LastName;
            dbHero.Place = dbHero.Place;

            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }


        //remove super hero
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SuperHero>>> DeleteSuperHeroes(int id)
        {
            var dbHero = await _context.SuperHeroes.FindAsync(id);
            if (dbHero == null)
            {
                return BadRequest("Hero not found. ");
            }

            _context.SuperHeroes.Remove(dbHero);
            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }

    }
}
