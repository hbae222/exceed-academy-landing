import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, BookOpen, Edit } from 'lucide-react';

const blogArticles = {
  'how-to-structure-an-essay': {
    title: "How to Structure an Essay: A Step-by-Step Guide for Middle and High School Students",
    content: `
      <p>Whether you're in middle school writing your first literary response or in high school preparing for college-level assignments, knowing how to structure an essay is essential. A strong essay framework helps you organize your thoughts clearly and communicate your ideas effectively.</p>

      <h2>Why Essay Structure Matters</h2>
      <p>A good essay structure makes your writing easier to follow and more convincing. Teachers and admissions officers look for essays that flow logically, present strong arguments, and stay focused on the main idea.</p>
      <p>Using a clear structure also boosts your grades and helps your writing stand out.</p>

      <h2>The 3-Part Essay Structure Every Student Should Know</h2>
      <h3>🧠 1. Introduction</h3>
      <p>The introduction sets the stage. It should:</p>
      <ul>
        <li>Hook your reader with a question, fact, or story</li>
        <li>Introduce your topic clearly</li>
        <li>End with a thesis statement — the main point or argument of your essay</li>
      </ul>
      
      <p><strong>Example Thesis Statement:</strong><br>
      "School uniforms limit creativity and do not improve academic performance."</p>

      <p><em>SEO Tip: Use the phrase "how to start an essay introduction" in your subheadings or metadata.</em></p>

      <h3>✍️ 2. Body Paragraphs</h3>
      <p>Each body paragraph should cover one key idea that supports your thesis. Use this structure:</p>
      <ul>
        <li>Topic sentence – introduces the paragraph's main idea</li>
        <li>Evidence – facts, quotes, examples</li>
        <li>Explanation – how your evidence supports your thesis</li>
        <li>Transition – connects to the next paragraph</li>
      </ul>

      <p><strong>Example Paragraph Topic:</strong><br>
      "Uniforms do not affect student performance, according to a 2022 study by XYZ University."</p>

      <p><em>SEO Tip: Use variations like "essay body paragraph format" or "how to write body paragraphs in an essay."</em></p>

      <div class="my-8 p-6 bg-blue-50 rounded-xl">
        <h4 class="text-exceed-navy font-bold mb-2">Diagram of Essay Structure</h4>
        <p>Introduction → Body Paragraphs → Conclusion</p>
        <ul class="mt-3">
          <li>Introduction: Hook, context, thesis</li>
          <li>Body: Topic sentence, evidence, explanation, transition</li>
          <li>Conclusion: Restate thesis, summarize key points, final thought</li>
        </ul>
      </div>

      <h3>🎯 3. Conclusion</h3>
      <p>The conclusion wraps up your essay and reinforces your main idea. It should:</p>
      <ul>
        <li>Restate your thesis in a fresh way</li>
        <li>Summarize your key points</li>
        <li>End with a strong final thought</li>
      </ul>

      <p><strong>Avoid:</strong></p>
      <ul>
        <li>Adding new arguments</li>
        <li>Repeating your thesis word-for-word</li>
        <li>Using weak phrases like "That's why…"</li>
      </ul>

      <p><strong>Stronger Closing Example:</strong><br>
      "To help students thrive, schools should encourage individuality — not suppress it through rigid uniform policies."</p>

      <h2>Bonus Essay Writing Tips for Students</h2>
      <ul>
        <li>Use transition words (e.g., furthermore, however, in contrast)</li>
        <li>Avoid filler and repetition</li>
        <li>Stick to one idea per paragraph</li>
        <li>Always proofread and revise for flow and grammar</li>
        <li>Use clear formatting: short paragraphs, consistent fonts, and subheadings</li>
      </ul>

      <p><strong>Pro Tip:</strong> Add keywords like "essay writing for beginners", "academic writing tips", and "high school essay guide" throughout your article (naturally!).</p>

      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Student editing an essay" class="w-full h-auto rounded-lg mb-2" />
        <p class="text-sm text-gray-500 italic">A student working on essay revisions with highlighters and annotations</p>
      </div>

      <h2>Final Thoughts</h2>
      <p>Now that you understand how to structure an essay, writing becomes less stressful and more effective. A strong introduction, organized body paragraphs, and a thoughtful conclusion are the foundation of every successful essay — whether it's for English class, AP exams, or a college application.</p>

      <div class="bg-exceed-light p-6 rounded-xl my-8 border-l-4 border-exceed-blue">
        <h4 class="font-bold text-exceed-navy mb-2">Need personalized help structuring your essay?</h4>
        <p>👉 Submit your essay for expert review and editing</p>
      </div>
    `,
    author: "Dr. Emma Chen",
    date: "May 18, 2025",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  'improving-essay-structure': {
    title: "Improving Essay Structure: A Guide for Middle and High School Students",
    content: `
      <h2>Introduction</h2>
      <p>This is a placeholder for the full article content. The actual content will be added later.</p>
      <h2>Key Points</h2>
      <ul>
        <li>Start with a compelling introduction</li>
        <li>Develop clear topic sentences</li>
        <li>Use evidence to support your arguments</li>
        <li>Create smooth transitions between paragraphs</li>
        <li>Craft a conclusion that reinforces your thesis</li>
      </ul>
      <p>Check back soon for the complete guide!</p>
    `,
    author: "Dr. Emma Chen",
    date: "May 10, 2025",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  'creative-writing-techniques': {
    title: "Creative Writing Techniques That Captivate Readers",
    content: `
      <h2>Top Strategies to Bring Your Stories to Life</h2>
      <p>If you've ever wondered how to write stories that truly connect with readers, you're not alone. Whether you're a student looking to enhance your creative writing for class or an aspiring author dreaming of publishing, learning a few powerful storytelling techniques can completely transform your writing.</p>

      <p>In this guide, you'll discover how to write more vividly, build tension, and keep readers turning the page.</p>

      <h2>Why Creative Writing Skills Matter</h2>
      <p>Creative writing helps students develop imagination, empathy, and communication skills. It also sharpens grammar and vocabulary — essential for academic success and storytelling alike.</p>
      <p>If you want to write stories that resonate, these techniques are for you.</p>

      <h2>1. Show, Don't Tell</h2>
      <p>One of the golden rules of creative writing: Don't tell the reader what to feel — show them through description.</p>
      <p><strong>Telling:</strong> "She was angry."<br>
      <strong>Showing:</strong> "Her jaw tightened, and her fists clenched around the crumpled letter."</p>
      <p>Use sensory details, body language, and setting to paint a scene instead of stating emotions outright.</p>

      <div class="my-8 p-6 bg-blue-50 rounded-xl">
        <h4 class="text-exceed-navy font-bold mb-2">SEO Tip</h4>
        <p>Include the phrase "show don't tell writing examples" in captions, alt text, or a sidebar tip box.</p>
      </div>

      <h2>2. Use Vivid Descriptions</h2>
      <p>Your goal is to help readers see, hear, and feel what's happening. Choose precise nouns, active verbs, and colorful adjectives.</p>
      <p><strong>Instead of:</strong> "It was a nice day."<br>
      <strong>Try:</strong> "Sunlight spilled across the sidewalk, and a warm breeze tugged at the edges of her jacket."</p>

      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80" alt="Split image showing telling vs showing in writing" class="w-full h-auto rounded-lg mb-2" />
        <p class="text-sm text-gray-500 italic">Visual comparison of "telling" versus "showing" in creative writing</p>
      </div>

      <h2>3. Create Relatable Characters</h2>
      <p>Great stories start with characters readers care about. Give your characters wants, flaws, and fears.</p>
      <p>Ask:</p>
      <ul>
        <li>What does your character want more than anything?</li>
        <li>What's standing in their way?</li>
        <li>How will they change by the end of the story?</li>
      </ul>
      <p><strong>Tip:</strong> Even in short pieces, a well-developed character creates emotional impact.</p>

      <h2>4. Build Tension with Conflict</h2>
      <p>Stories thrive on conflict. Introduce challenges that test your characters and raise the stakes.</p>
      <p>"The storm wasn't the only thing coming that night."</p>
      <p>Use pacing, short sentences, and cliffhangers to create suspense.</p>
      
      <div class="my-8 p-6 bg-blue-50 rounded-xl">
        <h4 class="text-exceed-navy font-bold mb-2">SEO Tip</h4>
        <p>Add keywords like "how to create tension in writing" and "story conflict examples."</p>
      </div>

      <h2>5. Use Dialogue That Feels Real</h2>
      <p>Good dialogue:</p>
      <ul>
        <li>Reflects each character's personality</li>
        <li>Moves the plot forward</li>
        <li>Feels natural (but not boring)</li>
      </ul>
      <p><strong>✘</strong> "Hello, how are you today?"<br>
      <strong>✔</strong> "You're late. Again."</p>
      <p>Avoid overusing dialogue tags like "he said angrily." Let the words and actions show the emotion instead.</p>

      <h2>6. Edit for Flow and Impact</h2>
      <p>Even the most creative ideas need editing to shine. Read your work out loud, cut unnecessary words, and tighten your phrasing.</p>
      <p>Ask:</p>
      <ul>
        <li>Does every sentence serve the story?</li>
        <li>Are your descriptions helping or slowing things down?</li>
        <li>Do you feel bored while reading? If so, your reader will too.</li>
      </ul>

      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Student reviewing printed pages with colorful notes" class="w-full h-auto rounded-lg mb-2" />
        <p class="text-sm text-gray-500 italic">A student revising their creative writing with notes and highlights</p>
      </div>

      <h2>Final Thoughts</h2>
      <p>Creative writing is more than putting words on a page — it's about crafting a world your reader can feel, see, and believe in. Use these techniques to improve your storytelling and express your unique voice with confidence.</p>
      <p>Whether you're working on a short story for class, a personal narrative, or the next bestselling novel, these tips will help you write with purpose and passion.</p>

      <div class="bg-exceed-light p-6 rounded-xl my-8 border-l-4 border-exceed-blue">
        <h4 class="font-bold text-exceed-navy mb-2">Ready for expert feedback on your writing?</h4>
        <p>👉 Submit your story for professional review and guidance</p>
      </div>
    `,
    author: "Michael Rivera",
    date: "April 25, 2025",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
  },
  'college-essay-tips': {
    title: "College Essays That Stand Out: Tips from Admissions Officers",
    content: `
      <h2>Introduction</h2>
      <p>This is a placeholder for the full article content. The actual content will be added later.</p>
      <h2>Key Points</h2>
      <ul>
        <li>Be authentic in your voice</li>
        <li>Focus on a specific story or experience</li>
        <li>Demonstrate growth and self-reflection</li>
        <li>Connect your experience to your future goals</li>
        <li>Edit ruthlessly for clarity and impact</li>
      </ul>
      <p>Check back soon for the complete guide!</p>
    `,
    author: "Sarah Johnson",
    date: "April 12, 2025",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
};

const BlogArticle: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? blogArticles[articleId as keyof typeof blogArticles] : null;
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="section-container min-h-[60vh] flex items-center justify-center flex-col">
          <h1 className="text-3xl font-bold text-exceed-navy mb-4">Article Not Found</h1>
          <p className="text-gray-700 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-10 pb-20 bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/blog" className="flex items-center text-exceed-blue hover:text-exceed-indigo mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold text-exceed-navy mb-4">{article.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">{article.date}</span>
              <span>By {article.author}</span>
            </div>
          </div>
          
          <div className="mb-10">
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-[400px] object-cover rounded-xl" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="border-t border-gray-200 mt-12 pt-8">
            <h3 className="text-exceed-navy font-semibold mb-4">Ready to improve your writing skills?</h3>
            <Button className="cta-button" asChild>
              <Link to="/#pricing">Start Your Writing Journey</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogArticle;
