-- Create team_members table
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT NOT NULL,
  order_index INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public can view team members" ON team_members FOR SELECT USING (true);

-- Insert data
INSERT INTO team_members (name, role, image_url, order_index) VALUES
('Tushar Rawat', 'Founder', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tushar', 1),
('Aastha Negi', 'Co-founder', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aastha', 2),
('Aditya Agarwal', 'Chief Operations Head', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya', 3),
('Utkarsh Rajoriya', 'Full Stack Developer', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Utkarsh', 4);
