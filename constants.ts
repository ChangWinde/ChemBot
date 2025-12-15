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
    title: 'DexFlyWheel: A Scalable and Self-improving Data Generation Framework for Dexterous Manipulation.',
    authors: ["Kefei Zhu", "Fengshuo Bai", "YuanHao Xiang", "Yishuai Cai", "Xinglin Chen", "Ruochong Li", "Xingtao Wang", "Hao Dong", "Yaodong Yang", "Xiaopeng Fan", "Yuanpei Chen"],
    venue: 'NeurIPS 2025',
    year: 2025,
    abstract: 'Dexterous manipulation is critical for advancing robot capabilities in real-world applications, yet diverse and high-quality datasets remain scarce. Existing data collection methods either rely on human teleoperation or require significant human engineering, or generate data with limited diversity, which restricts their scalability and generalization. In this paper, we introduce DexFlyWheel, a scalable data generation framework that employs a self-improving cycle to continuously enrich data diversity. Starting from efficient seed demonstrations warmup, DexFlyWheel expands the dataset through iterative cycles. Each cycle follows a closed-loop pipeline that integrates Imitation Learning (IL), residual Reinforcement Learning (RL), rollout trajectory collection, and data augmentation. Specifically, IL extracts human-like behaviors from demonstrations, and residual RL enhances policy generalization. The learned policy is then used to generate trajectories in simulation, which are further augmented across diverse environments and spatial configurations before being fed back into the next cycle. Over successive iterations, a self-improving data flywheel effect emerges, producing datasets that cover diverse scenarios and thereby scaling policy performance. Experimental results demonstrate that DexFlyWheel generates over 2,000 diverse demonstrations across four challenging tasks. Policies trained on our dataset achieve an average success rate of 81.9\% on the challenge test sets and successfully transfer to the real world through digital twin, achieving a 78.3\% success rate on dual-arm lift tasks.',
    tags: ['Dexterous Manipulation', 'Data Generation', 'Self-improving'],
    pdfUrl: '#'
  },
  {
    id: 'p2',
    title: 'STAR: Efficient Preference-based Reinforcement Learning via Dual Regularization.',
    authors: ["Fengshuo Bai", "Rui Zhao", "Hongming Zhang", "Sijia Cui", "Ying Wen", "Yaodong Yang", "Bo Xu", "Lei Han"],
    venue: 'NeurIPS 2025',
    year: 2025,
    abstract: 'Preference-based reinforcement learning (PbRL) has shown impressive capabilities in training agents without reward engineering. However, a notable limitation of PbRL is its dependency on substantial human feedback. This dependency stems from the learning loop, which entails accurate reward learning compounded with value/policy learning, necessitating a considerable number of samples. To boost the learning loop, we propose SEER, an efficient PbRL method that integrates label smoothing and policy regularization techniques. Label smoothing reduces overfitting of the reward model by smoothing human preference labels. Additionally, we bootstrap a conservative estimate Qˆ using well-supported state-action pairs from the current replay memory to mitigate overestimation bias and utilize it for policy learning regularization. Our experimental results across a variety of complex tasks, both in online and offline settings, demonstrate that our approach improves feedback efficiency, outperforming state-of-the-art methods by a large margin. Ablation studies further reveal that SEER achieves a more accurate Q-function compared to prior work.',
    tags: ['Preference-based Reinforcement Learning', 'Dual Regularization', 'Efficient Feedback'],
    codeUrl: '#'
  },
  {
    id: 'p3',
    title: 'TSGS: Improving Gaussian Splatting for Transparent Surface Reconstruction via Normal and De-lighting Priors',
    authors: ["Mingwei Li", "Pu Pang", "Hehe Fan", "Hua Huang", "Yi Yang"],
    venue: 'ACM MM 2025',
    year: 2025,
    abstract: 'Reconstructing transparent surfaces is essential for tasks such as robotic manipulation in labs, yet it poses a significant challenge for 3D reconstruction techniques like 3D Gaussian Splatting (3DGS). These methods often encounter a transparency-depth dilemma, where the pursuit of photorealistic rendering through standard α-blending undermines geometric precision, resulting in considerable depth estimation errors for transparent materials. To address this issue, we introduce Transparent Surface Gaussian Splatting (TSGS), a new framework that separates geometry learning from appearance refinement. In the geometry learning stage, TSGS focuses on geometry by using specular-suppressed inputs to accurately represent surfaces. In the second stage, TSGS improves visual fidelity through anisotropic specular modeling, crucially maintaining the established opacity to ensure geometric accuracy. To enhance depth inference, TSGS employs a first-surface depth extraction method. This technique uses a sliding window over α-blending weights to pinpoint the most likely surface location and calculates a robust weighted average depth. To evaluate the transparent surface reconstruction task under realistic conditions, we collect a TransLab dataset that includes complex transparent laboratory glassware. Extensive experiments on TransLab show that TSGS achieves accurate geometric reconstruction and realistic rendering of transparent objects simultaneously within the efficient 3DGS framework. Specifically, TSGS significantly surpasses current leading methods, achieving a 37.3% reduction in chamfer distance and an 8.0% improvement in F1 score compared to the top baseline. The code and dataset are available at https://longxiang-ai.github.io/TSGS/',
    tags: ['Transparent Surface Reconstruction', 'Normal and De-lighting Priors', 'Gaussian Splatting'],
    pdfUrl: '#'
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