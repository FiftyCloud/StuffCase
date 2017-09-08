namespace StuffCaseApi.Models
{
    using Microsoft.EntityFrameworkCore;

    public class StuffContext : DbContext
    {
        public StuffContext(DbContextOptions<StuffContext> options)
            : base(options)
        {
        }

        public DbSet<StuffItem> StuffItems { get; set; }

    }
}