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
      <h2>Essential Elements of Effective Essay Structure</h2>
      <p>Many students struggle with organizing their thoughts in writing. Whether you're working on a class assignment or preparing for standardized tests, understanding how to structure your ideas can transform your writing from good to exceptional.</p>

      <p>In this comprehensive guide, we'll explore proven techniques that help middle and high school students create well-structured essays that engage readers and earn top grades.</p>

      <h2>Why Essay Structure Matters</h2>
      <p>A well-structured essay helps readers follow your argument, understand your main points, and remember your key insights. When teachers grade essays, they look for logical organization as much as they look for grammar and content knowledge.</p>
      
      <p>Great structure isn't just about following rules—it's about making your ideas shine.</p>

      <h2>The Foundation: Thesis Statements That Work</h2>
      <p>Every solid essay begins with a clear thesis statement—a single sentence that states your main argument or purpose.</p>

      <p><strong>Weak thesis:</strong> "Social media is interesting to study."</p>
      <p><strong>Strong thesis:</strong> "While social media connects teenagers globally, its negative effects on mental health outweigh its communication benefits for adolescents."</p>

      <p>Your thesis should:</p>
      <ul>
        <li>Take a specific position (not just state a fact)</li>
        <li>Be debatable (someone could reasonably disagree)</li>
        <li>Set up the structure for your entire essay</li>
      </ul>

      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Student writing on laptop" class="w-full h-auto rounded-lg mb-2" />
        <p class="text-sm text-gray-500 italic">A student working on structuring their essay with a clear outline</p>
      </div>

      <h2>Building Better Body Paragraphs</h2>
      <p>Each paragraph in your essay should focus on one main idea that supports your thesis. Follow this body paragraph formula for stronger writing:</p>

      <div class="my-8 p-6 bg-blue-50 rounded-xl">
        <h4 class="text-exceed-navy font-bold mb-2">The PEEL Method</h4>
        <ul>
          <li><strong>P</strong>oint: Start with a clear topic sentence</li>
          <li><strong>E</strong>vidence: Provide specific examples, facts, or quotations</li>
          <li><strong>E</strong>xplanation: Analyze how your evidence supports your point</li>
          <li><strong>L</strong>ink: Connect back to your thesis or transition to the next paragraph</li>
        </ul>
      </div>

      <p><strong>Example PEEL Paragraph:</strong></p>
      <p><em>Excessive social media use correlates with increased anxiety and depression in teenagers. (Point) According to a 2023 study in the Journal of Adolescent Health, teens who use social media more than three hours daily are 35% more likely to report depressive symptoms. (Evidence) This statistic suggests that the constant comparison and digital stress from platforms like Instagram and TikTok significantly impacts developing adolescent brains. (Explanation) This negative mental health impact demonstrates why parents and educators should monitor and limit teen social media consumption. (Link)</em></p>

      <h2>Transitions: The Secret to Smooth Reading</h2>
      <p>Strong essays flow naturally from one idea to the next. Use these transition techniques to guide your reader:</p>

      <ul>
        <li><strong>Between paragraphs:</strong> "Beyond the economic factors, cultural influences also play a crucial role..."</li>
        <li><strong>Between sections:</strong> "Having examined the causes of the issue, we now turn to potential solutions..."</li>
        <li><strong>For examples:</strong> "For instance," "To illustrate," "Specifically..."</li>
        <li><strong>For contrast:</strong> "However," "On the other hand," "Conversely..."</li>
        <li><strong>For conclusions:</strong> "Therefore," "As a result," "Ultimately..."</li>
      </ul>

      <h2>Advanced Organization Patterns</h2>
      <p>As you advance in your academic career, experiment with these organizational structures:</p>

      <div class="my-8">
        <h4 class="font-bold text-exceed-navy">1. Compare and Contrast</h4>
        <p>Structure your essay either by:</p>
        <ul>
          <li><strong>Subject-by-Subject:</strong> Discuss all aspects of A, then all aspects of B</li>
          <li><strong>Point-by-Point:</strong> Compare A and B on one aspect, then another aspect</li>
        </ul>
      </div>

      <div class="my-8">
        <h4 class="font-bold text-exceed-navy">2. Problem-Solution</h4>
        <p>First thoroughly explore a problem, then propose and evaluate possible solutions.</p>
      </div>

      <div class="my-8">
        <h4 class="font-bold text-exceed-navy">3. Chronological</h4>
        <p>Organize information by time sequence—useful for historical essays or process explanations.</p>
      </div>

      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Student organizing essay on computer" class="w-full h-auto rounded-lg mb-2" />
        <p class="text-sm text-gray-500 italic">Using digital tools to create an essay outline before writing</p>
      </div>

      <h2>Introductions That Hook and Conclusions That Resonate</h2>
      <p>Your introduction should do three things:</p>
      <ol>
        <li>Hook the reader with an interesting fact, question, or brief story</li>
        <li>Provide necessary context for your topic</li>
        <li>Present your thesis statement</li>
      </ol>

      <p>Your conclusion should:</p>
      <ol>
        <li>Restate your thesis in fresh words</li>
        <li>Summarize your main points</li>
        <li>Leave the reader with a thought-provoking final impression</li>
      </ol>

      <p><strong>Pro Tip:</strong> Write your introduction last! Once you know exactly what your essay contains, crafting the perfect opening becomes much easier.</p>

      <h2>Common Structure Problems (And How to Fix Them)</h2>

      <div class="my-8">
        <h4 class="font-bold text-exceed-navy">Problem: The "One Long Paragraph" Essay</h4>
        <p><strong>Solution:</strong> Create a new paragraph whenever you introduce a new main idea. As a rule of thumb, most academic paragraphs should be 4-6 sentences long.</p>
      </div>

      <div class="my-8">
        <h4 class="font-bold text-exceed-navy">Problem: The "Wandering" Essay</h4>
        <p><strong>Solution:</strong> Create an outline before writing. For each paragraph, write down the main idea and how it supports your thesis.</p>
      </div>

      <div class="my-8">
        <h4 class="font-bold text-exceed-navy">Problem: The "So What?" Conclusion</h4>
        <p><strong>Solution:</strong> Don't just repeat what you've already said. Explain why your argument matters in a broader context.</p>
      </div>

      <h2>Digital Tools to Help Structure Your Essays</h2>
      <p>Technology can help you organize your thoughts:</p>
      <ul>
        <li>Mind-mapping apps like MindMeister or Coggle</li>
        <li>Outlining features in Google Docs or Microsoft Word</li>
        <li>Grammar checkers like Grammarly to help with transitions</li>
      </ul>

      <div class="bg-exceed-light p-6 rounded-xl my-8 border-l-4 border-exceed-blue">
        <h4 class="font-bold text-exceed-navy mb-2">Ready to transform your essay structure?</h4>
        <p>Start by creating a clear outline for your next writing assignment. List your thesis, main points, and evidence before you begin writing.</p>
      </div>

      <h2>Conclusion</h2>
      <p>Mastering essay structure takes practice, but the results are worth it. When your ideas flow logically and your paragraphs build coherently, your writing becomes more persuasive, clear, and effective.</p>
      <p>Remember, good structure isn't just about following rules—it's about making your unique voice and ideas shine through in the most powerful way possible.</p>
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
    title: "How to Write a Standout College Essay: Tips from Former Admissions Officers",
    content: `
      <h2>Proven Strategies to Catch Attention and Get Accepted</h2>
      <p>Your college essay isn't just another assignment — it's a critical piece of your application that can set you apart from thousands of other applicants. According to former admissions officers from top schools like Harvard and Stanford, a strong essay can be the difference between an acceptance letter and a waitlist.</p>

      <p>Here's how to write a college essay that gets noticed — and remembered.</p>

      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Students celebrating graduation outside a university" class="w-full h-auto rounded-lg mb-2" />
        <p class="text-sm text-gray-500 italic">Students celebrating their college acceptances and future graduation</p>
      </div>

      <h2>Why Your College Essay Matters</h2>
      <p>Admissions officers read hundreds of essays a day. Most are well-written — but forgettable. What stands out are the essays that tell a genuine story, reveal your character, and make a reader pause.</p>

      <p><em>SEO Tip: Include phrases like "why college essays matter" and "importance of the personal statement."</em></p>

      <h2>1. Start with a Hook That Feels Authentic</h2>
      <p>Open with a moment, memory, or image that draws the reader in. Don't try to sound impressive — aim for honest and unique.</p>

      <p><strong>Weak Start:</strong><br>
      "I've always wanted to attend a prestigious university."</p>

      <p><strong>Stronger Start:</strong><br>
      "The night before my first robotics competition, my circuit board caught fire."</p>

      <p>Start with action, curiosity, or conflict.</p>

      <h2>2. Make It Personal — Not Just Impressive</h2>
      <p>Admissions officers want to get to know who you are, not just what you've done. Focus less on achievements and more on what shaped you.</p>

      <p>Instead of listing accomplishments, share the meaning behind them.</p>

      <p><strong>Example:</strong><br>
      Don't just say you led a food drive. Describe how organizing it changed your view on leadership and service.</p>

      <p><em>SEO Tip: Include keyword variations like "personal college essay examples" or "how to write about yourself in a college essay."</em></p>

      <h2>3. Focus on One Story, Not Your Whole Life</h2>
      <p>Resist the urge to cover everything. Instead, go deep on one theme or experience that reveals something about you.</p>

      <p>Think:</p>
      <ul>
        <li>A challenge you overcame</li>
        <li>A moment of growth or failure</li>
        <li>A unique family tradition or perspective</li>
      </ul>

      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Student writing college essay" class="w-full h-auto rounded-lg mb-2" />
        <p class="text-sm text-gray-500 italic">A student drafting their college admissions essay</p>
      </div>

      <h2>4. Use Your Voice — Not a Thesaurus</h2>
      <p>Your essay should sound like you, not a dictionary. Avoid trying to sound overly academic or formal. Use natural, clear language that reflects your voice and personality.</p>

      <p><strong>Tip:</strong> Read your essay out loud. If it doesn't sound like something you'd say in a thoughtful conversation, revise it.</p>

      <h2>5. Connect Back to the College</h2>
      <p>Admissions readers love when students show why they're a good fit. If your essay naturally ties in with the college's values, programs, or mission — mention it.</p>

      <p>But avoid generic flattery ("Your school is prestigious"). Be specific.</p>

      <p><strong>Example:</strong> "The interdisciplinary approach of Stanford's Symbolic Systems program mirrors the way I combine logic and creativity in my research."</p>

      <h2>6. Revise Ruthlessly</h2>
      <p>The best essays go through many drafts. After your first version:</p>
      <ul>
        <li>Cut repetition</li>
        <li>Sharpen your structure</li>
        <li>Ask a trusted mentor or teacher for feedback</li>
        <li>Make sure your essay answers the prompt and stays focused</li>
      </ul>

      <div class="my-8">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Editing a college essay" class="w-full h-auto rounded-lg mb-2" />
        <p class="text-sm text-gray-500 italic">Final revisions and edits to make your essay shine</p>
      </div>

      <h2>Final Thoughts</h2>
      <p>Your college essay is your chance to speak directly to admissions officers — to be seen as a real, multidimensional person. With a strong opening, honest storytelling, and thoughtful reflection, your essay can make a lasting impression.</p>

      <div class="bg-exceed-light p-6 rounded-xl my-8 border-l-4 border-exceed-blue">
        <h4 class="font-bold text-exceed-navy mb-2">Need help with your college essay?</h4>
        <p>👉 Submit your essay for expert feedback from former admissions officers</p>
      </div>
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
