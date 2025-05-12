import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    title: "How to Prepare Your Chicago Home for Winter with Pressure Washing",
    excerpt: "Learn why fall pressure washing is crucial for protecting your home from Chicago's harsh winter weather. Get expert tips on timing and preparation.",
    date: "2024-03-15",
    category: "Seasonal Tips",
    readTime: "5 min read"
  },
  {
    title: "The Impact of Road Salt on Your Property (And How to Deal with It)",
    excerpt: "Discover how Chicago's winter road salt affects your property and the best pressure washing techniques to remove salt residue and prevent damage.",
    date: "2024-03-10",
    category: "Maintenance",
    readTime: "4 min read"
  },
  {
    title: "Best Practices for Pressure Washing Different Types of Chicago Architecture",
    excerpt: "From historic brownstones to modern condos, learn the proper pressure washing techniques for different architectural styles common in Chicago.",
    date: "2024-03-05",
    category: "Tips & Techniques",
    readTime: "6 min read"
  },
  {
    title: "Spring Cleaning: A Complete Guide to Exterior Property Maintenance",
    excerpt: "Get your Chicago property ready for spring with our comprehensive guide to exterior cleaning, including pressure washing tips for various surfaces.",
    date: "2024-03-01",
    category: "Seasonal Tips",
    readTime: "7 min read"
  },
  {
    title: "How Often Should You Pressure Wash Your Chicago Property?",
    excerpt: "Learn the recommended frequency for pressure washing different surfaces based on Chicago's unique climate and urban environment.",
    date: "2024-02-25",
    category: "Maintenance",
    readTime: "4 min read"
  },
  {
    title: "Eco-Friendly Pressure Washing: Protecting Chicago's Environment",
    excerpt: "Discover how we use environmentally conscious cleaning methods while maintaining effective results for your property.",
    date: "2024-02-20",
    category: "Sustainability",
    readTime: "5 min read"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Pressure Washing Blog</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Expert tips and insights for maintaining your Chicago property
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                {/* Add blog post image here */}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter for the latest pressure washing tips and special offers</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 