import { Member, MemberRole, Publication, NewsItem, ResearchArea } from './types';

export const GROUP_NAME = "Nova Intelligent Systems Lab";
export const GROUP_DESCRIPTION = "We explore the intersection of artificial intelligence, cognitive science, and human-computer interaction to build adaptive systems that empower human creativity.";

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: '1',
    title: 'Generative AI & Creativity',
    description: 'Investigating how large language models can act as collaborative partners in creative domains like writing, coding, and design.',
    imageUrl: 'https://picsum.photos/seed/ai/600/400'
  },
  {
    id: '2',
    title: 'Human-Robot Interaction',
    description: 'Developing social robots that can interpret non-verbal cues and adapt their behavior to specific social contexts.',
    imageUrl: 'https://picsum.photos/seed/robot/600/400'
  },
  {
    id: '3',
    title: 'Explainable AI (XAI)',
    description: 'Creating visualization techniques and interface paradigms that make complex deep learning models transparent and trustworthy.',
    imageUrl: 'https://picsum.photos/seed/xai/600/400'
  }
];

export const MEMBERS: Member[] = [
  {
    id: 'pi-1',
    name: 'Dr. Elena Vance',
    role: MemberRole.PI,
    image: 'https://picsum.photos/seed/elena/400/400',
    bio: 'Associate Professor of Computer Science. Ph.D. from MIT. Focuses on human-centered AI systems.',
    email: 'elena.vance@example.edu',
    website: 'https://example.com',
    googleScholar: '#'
  },
  {
    id: 'pd-1',
    name: 'Dr. James Chen',
    role: MemberRole.POSTDOC,
    image: 'https://picsum.photos/seed/james/400/400',
    bio: 'Working on multimodal interaction and accessible computing interfaces.',
    email: 'j.chen@example.edu',
    twitter: '#'
  },
  {
    id: 'phd-1',
    name: 'Sarah Miller',
    role: MemberRole.PHD,
    image: 'https://picsum.photos/seed/sarah/400/400',
    bio: 'Researching interpretability in reinforcement learning agents.',
    email: 's.miller@example.edu'
  },
  {
    id: 'phd-2',
    name: 'David Okafor',
    role: MemberRole.PHD,
    image: 'https://picsum.photos/seed/david/400/400',
    bio: 'Focusing on generative models for scientific discovery.',
    email: 'd.okafor@example.edu'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Trust in Automation: A Longitudinal Study of AI Assistants in Clinical Settings',
    authors: ['S. Miller', 'J. Chen', 'E. Vance'],
    venue: 'CHI 2024',
    year: 2024,
    abstract: 'We conducted a 6-month study with 40 clinicians to understand how trust in AI diagnostic tools evolves over time.',
    tags: ['HCI', 'Healthcare'],
    pdfUrl: '#'
  },
  {
    id: 'p2',
    title: 'Generative Agents for Simulation of Social Behavior',
    authors: ['D. Okafor', 'E. Vance'],
    venue: 'NeurIPS 2023',
    year: 2023,
    abstract: 'Proposing a new architecture for generative agents that store memories and reflect on past observations.',
    tags: ['AI', 'Simulation'],
    codeUrl: '#'
  },
  {
    id: 'p3',
    title: 'Visualizing Attention Mechanisms in Transformers',
    authors: ['J. Chen', 'E. Vance'],
    venue: 'IEEE VIS 2023',
    year: 2023,
    abstract: 'A novel interactive visualization tool for exploring multi-head attention patterns in BERT-like models.',
    tags: ['Visualization', 'NLP'],
    pdfUrl: '#'
  },
  {
    id: 'p4',
    title: 'Robotic Companions for Elderly Care: Ethical Considerations',
    authors: ['S. Miller', 'E. Vance'],
    venue: 'HRI 2022',
    year: 2022,
    abstract: 'A framework for evaluating the ethical implications of social robots in home care environments.',
    tags: ['Robotics', 'Ethics']
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2024-05-15',
    title: 'Paper Accepted to CHI 2024',
    content: 'Sarah and James had their paper on Trust in Automation accepted to CHI 2024! Congratulations!',
    category: 'Publication'
  },
  {
    id: 'n2',
    date: '2024-04-01',
    title: 'Dr. Vance Receives NSF CAREER Award',
    content: 'We are thrilled to announce that Dr. Elena Vance has received the prestigious NSF CAREER award to support her work on Explainable AI.',
    category: 'Award'
  },
  {
    id: 'n3',
    date: '2023-11-10',
    title: 'New PhD Students Join the Lab',
    content: 'Welcome to our new PhD cohort! We are excited to have you on board.',
    category: 'General'
  }
];