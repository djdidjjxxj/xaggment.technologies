-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  thumbnail_url TEXT,
  author TEXT DEFAULT 'Xaggment Team',
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create roadmap_milestones table
CREATE TABLE roadmap_milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT CHECK (status IN ('completed', 'in_progress', 'planned')),
  period TEXT,
  order_index INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE roadmap_milestones ENABLE ROW LEVEL SECURITY;

-- Policies for blog_posts
CREATE POLICY "Public can view blog posts" ON blog_posts FOR SELECT USING (true);

-- Policies for roadmap_milestones
CREATE POLICY "Public can view roadmap milestones" ON roadmap_milestones FOR SELECT USING (true);

-- Insert seed data for blog_posts
INSERT INTO blog_posts (title, excerpt, content, thumbnail_url, author) VALUES
('The Future of AI Automation in Marketing', 'Discover how AI is reshaping the way brands interact with their customers and optimizing campaign ROI.', 'AI is not just a buzzword; it is a fundamental shift in how marketing operations are conducted...', 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e172f103-bf6a-468d-b861-7592449a5fd7.jpg', 'Tushar Rawat'),
('Scaling Your Startup: A Practical Guide', 'From seed to series A, understand the key milestones and strategies for sustainable growth.', 'Scaling a startup requires a delicate balance between speed and stability...', 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_1b13a4d9-ca62-493c-bf21-1b9da93d454f.jpg', 'Aastha Negi'),
('Maximizing ROI with Data-Driven Decisions', 'How to leverage analytics to drive your business forward and outpace the competition.', 'In today''s digital landscape, data is the most valuable asset any business possesses...', 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_2f7db377-c674-4d27-86af-6f44673a51e8.jpg', 'Aditya Agarwal');

-- Insert seed data for roadmap_milestones
INSERT INTO roadmap_milestones (title, description, status, period, order_index) VALUES
('Company Foundation', 'Xaggment Technologies was officially incorporated.', 'completed', 'Q1 2024', 1),
('Service Expansion', 'Launched our AI Automation and Custom Development divisions.', 'completed', 'Q2 2024', 2),
('Global Client Reach', 'Acquiring first 100 international clients and establishing global presence.', 'in_progress', 'Q3 2024', 3),
('AI Platform Beta', 'Launching the beta version of our proprietary AI-driven marketing analytics platform.', 'planned', 'Q4 2024', 4),
('Enterprise Solutions', 'Developing customized enterprise-grade solutions for Fortune 500 companies.', 'planned', 'Q1 2025', 5);
