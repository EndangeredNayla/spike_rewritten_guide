using System.ComponentModel.DataAnnotations;

namespace rewritten_guide.Models
{
    public class ContactModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Toon { get; set; }
        [Required]
        public string Message { get; set; }
    }
}