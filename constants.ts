import { Member, MemberRole, Publication, NewsItem, ResearchArea } from './types';

export const GROUP_NAME = "Chembot Research Lab";
export const GROUP_DESCRIPTION = "Pioneering autonomous laboratory robots that combine chemical intelligence with dexterous manipulation to accelerate the frontiers of basic research.";

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: '1',
    title: 'Efficient Preference-based Reinforcement Learning',
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
    id: 'teacher-1',
    name: 'Dr. Ying Wen',
    role: MemberRole.PI,
    image: 'https://yingwen.io/author/ying-wen/avatar_hude959322692e67e9b74e6796722f3509_66818_270x270_fill_q90_lanczos_center.jpg',
    bio: 'Associate Professor in School of Artificial Intelligence and John Hopcroft Center, Shanghai Jiao Tong University. ',
    email: '',
    website: 'https://yingwen.io/',
    googleScholar: 'https://scholar.google.com/citations?user=_A1CxG8AAAAJ'
  },
  {
    id: 'teacher-2',
    name: 'Dr. Junchi Yan',
    role: MemberRole.PI,
    image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=ga230VoAAAAJ&citpid=24',
    bio: 'Professor and Associate Dean at the School of Artificial Intelligence, Professor and Associate Dean at the School of Artificial Intelligence.',
    email: '',
    website: 'https://thinklab.sjtu.edu.cn/',
    googleScholar: 'https://scholar.google.com/citations?user=ga230VoAAAAJ&hl=en'
  },
  {
    id: 'teacher-3',
    name: 'Dr. Yaodong Yang',
    role: MemberRole.PI,
    image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=6yL0xw8AAAAJ&citpid=41',
    bio: 'Assistant Professor at the Institute for Artificial Intelligence, Peking University, Director of the AI Safety Centre at BAAI, and Chief Scientist of the PKU–PsiBot Joint Laboratory.',
    email: '',
    website: 'https://www.yangyaodong.com/',
    googleScholar: 'https://scholar.google.com/citations?user=6yL0xw8AAAAJ&hl=en'
  },
  {
    id: 'student-1',
    name: 'Fengshuo Bai',
    role: MemberRole.PHD,
    image: '/assets/images/bio_bfs.png',
    bio: 'Ph.D. Student at Department of Computer Science and Engineering, Shanghai Jiao Tong University as well as a member of PAIR-Lab, co-advised by Dr. Yaodong Yang and Dr. Ying Wen.',
    email: 'fengshuobai@sjtu.edu.cn',
    website: 'https://changwinde.github.io/',
    googleScholar: 'https://scholar.google.com/citations?user=rzt0quQAAAAJ'
  },
  {
    id: 'student-2',
    name: 'Jing Gao',
    role: MemberRole.PHD,
    image: 'https://avatars.githubusercontent.com/u/18435084?v=4',
    bio: 'Ph.D. Student at Department of Integrated Circuits, Shanghai Jiao Tong University',
    email: 'jinggao@sjtu.edu.cn',
    website: 'https://github.com/Xuwznln',
    googleScholar: ''
  },
  {
    id: 'student-3',
    name: 'Mingwei Li',
    role: MemberRole.PHD,
    image: '/assets/images/bio_lmw.png',
    bio: 'Ph.D. student at Zhejiang University, whose research interest lies in 3D/4D Reconstruction and generative models.',
    email: 'mingweili@zju.edu.cn',
    website: 'https://github.com/longxiang-ai',
    googleScholar: 'https://scholar.google.com/citations?user=EQMVZh4AAAAJ&hl=zh-CN'
  },
  {
    id: 'student-4',
    name: 'Yufeng Li',
    role: MemberRole.PHD,
    image: '/assets/images/bio_lyf.png',
    bio: 'Yufeng Li is currently a Ph.D. candidate in the Department of Computer Science and Engineering at Shanghai Jiao Tong University, under the supervision of Prof. Junchi Yan. His research interests include graph machine learning, embodied intelligence, and optimal transport theory.',
    email: 'liyufeng854@gmail.com',
    website: 'https://scholar.google.com/citations?user=c7KN8nsAAAAJ&hl=zh-CN',
    googleScholar: 'https://scholar.google.com/citations?user=c7KN8nsAAAAJ&hl=zh-CN'
  },
  {
    id: 'student-5',
    name: 'Peishuo Wang',
    role: MemberRole.PHD,
    image: '/assets/images/bio_wps.png',
    bio: 'PhD student working on Vision-Language-Action(VLA) models, with a focus on long-horizon task execution in embodied settings, particularly for chemical laboratory automation.',
    email: 's-wps24@bjzgca.edu.cn',
    website: 'https://github.com/WPS852',
    googleScholar: ''
  },
  {
    id: 'student-6',
    name: 'Yunhong Lou',
    role: MemberRole.PHD,
    image: '/assets/images/bio_lyh.jpg',
    bio: 'PhD student at Zhejiang University Working on AI-driven computational chemistry and AI4Science.',
    email: 'axdfhj1999@gmail.com',
    website: '',
    googleScholar: ''
  },
  {
    id: 'student-7',
    name: 'Qifeng Li',
    role: MemberRole.PHD,
    image: '/assets/images/bio_lqf.jpg',
    bio: 'PhD Student at Department of Computer Science and Engineering, Shanghai Jiao Tong University. ',
    email: 'liqifeng@sjtu.edu.cn',
    website: '',
    googleScholar: 'https://scholar.google.com/citations?user=vi3aFyoAAAAJ&hl=en'
  },
  {
    id: 'student-8',
    name: 'Pu Pang',
    role: MemberRole.PHD,
    image: '/assets/images/bio_pp.jpg',
    bio: 'Ph.D. student at Xi\'an Jiaotong University, focusing on 3D reconstruction and perception to build accurate representations of complex environments.',
    email: 'fankewen@stu.xjtu.edu.cn',
    website: 'https://github.com/fankewen',
    googleScholar: 'https://scholar.google.com/citations?hl=zh-CN&user=_P4xQLIAAAAJ'
  },
  {
    id: 'intern-1',
    name: 'Tawei Chou',
    role: MemberRole.INTERN,
    image: '/assets/images/bio_zdw.jpg',
    bio: 'Ph.D student at the School of Intelligence Science and Technology, Peking University. His research focuses on the autonomous intelligence, resilience of unmanned systems, and Embodied Intelligence.',
    email: 'zhoudw18@tsinghua.org.cn',
    website: 'https://chembot.zgca.com/',
    googleScholar: 'https://scholar.google.com/citations?view_op=list_works&hl=zh-TW&user=eZqHVV0AAAAJ'
  },
  {
    id: 'intern-2',
    name: 'Xinrui Gou',
    role: MemberRole.INTERN,
    image: '',
    bio: '',
    email: '',
    website: '',
    googleScholar: ''
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'DexFlyWheel: A Scalable and Self-improving Data Generation Framework for Dexterous Manipulation.',
    authors: ["Kefei Zhu", "Fengshuo Bai", "YuanHao Xiang", "Yishuai Cai", "Xinglin Chen", "Ruochong Li", "Xingtao Wang", "Hao Dong", "Yaodong Yang", "Xiaopeng Fan", "Yuanpei Chen"],
    venue: 'NeurIPS 2025',
    year: 2025,
    abstract: 'Dexterous manipulation is critical for advancing robot capabilities in real-world applications, yet diverse and high-quality datasets remain scarce. Existing data collection methods either rely on human teleoperation or require significant human engineering, or generate data with limited diversity, which restricts their scalability and generalization. In this paper, we introduce DexFlyWheel, a scalable data generation framework that employs a self-improving cycle to continuously enrich data diversity. Starting from efficient seed demonstrations warmup, DexFlyWheel expands the dataset through iterative cycles. Each cycle follows a closed-loop pipeline that integrates Imitation Learning (IL), residual Reinforcement Learning (RL), rollout trajectory collection, and data augmentation. Specifically, IL extracts human-like behaviors from demonstrations, and residual RL enhances policy generalization. The learned policy is then used to generate trajectories in simulation, which are further augmented across diverse environments and spatial configurations before being fed back into the next cycle. Over successive iterations, a self-improving data flywheel effect emerges, producing datasets that cover diverse scenarios and thereby scaling policy performance. Experimental results demonstrate that DexFlyWheel generates over 2,000 diverse demonstrations across four challenging tasks. Policies trained on our dataset achieve an average success rate of 81.9\% on the challenge test sets and successfully transfer to the real world through digital twin, achieving a 78.3\% success rate on dual-arm lift tasks.',
    tags: ['Dexterous Manipulation', 'Data Generation'],
    pdfUrl: 'https://arxiv.org/pdf/2509.23829'
  },
  {
    id: 'p2',
    title: 'STAR: Efficient Preference-based Reinforcement Learning via Dual Regularization.',
    authors: ["Fengshuo Bai", "Rui Zhao", "Hongming Zhang", "Sijia Cui", "Ying Wen", "Yaodong Yang", "Bo Xu", "Lei Han"],
    venue: 'NeurIPS 2025',
    year: 2025,
    abstract: 'Preference-based reinforcement learning (PbRL) has shown impressive capabilities in training agents without reward engineering. However, a notable limitation of PbRL is its dependency on substantial human feedback. This dependency stems from the learning loop, which entails accurate reward learning compounded with value/policy learning, necessitating a considerable number of samples. To boost the learning loop, we propose SEER, an efficient PbRL method that integrates label smoothing and policy regularization techniques. Label smoothing reduces overfitting of the reward model by smoothing human preference labels. Additionally, we bootstrap a conservative estimate Qˆ using well-supported state-action pairs from the current replay memory to mitigate overestimation bias and utilize it for policy learning regularization. Our experimental results across a variety of complex tasks, both in online and offline settings, demonstrate that our approach improves feedback efficiency, outperforming state-of-the-art methods by a large margin. Ablation studies further reveal that SEER achieves a more accurate Q-function compared to prior work.',
    tags: ['PbRL', 'Efficiency'],
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
  },
  {
    id: 'p4',
    title: 'DreamRenderer: Taming Multi-Instance Attribute Control in Large-Scale Text-to-Image Models',
    authors: ["Dewei Zhou", "Mingwei Li", "Zongxin Yang", "Yi Yang"],
    venue: 'ICCV 2025',
    year: 2025,
    abstract: 'Image-conditioned generation methods, such as depth- and canny-conditioned approaches, have demonstrated remarkable abilities for precise image synthesis. However, existing models still struggle to accurately control the content of multiple instances (or regions). Even state-of-the-art models like FLUX and 3DIS face challenges, such as attribute leakage between instances, which limits user control. To address these issues, we introduce DreamRenderer, a training-free approach built upon the FLUX model. DreamRenderer enables users to control the content of each instance via bounding boxes or masks, while ensuring overall visual harmony. We propose two key innovations: 1) Bridge Image Tokens for Hard Text Attribute Binding, which uses replicated image tokens as bridge tokens to ensure that T5 text embeddings, pre-trained solely on text data, bind the correct visual attributes for each instance during Joint Attention; 2) Hard Image Attribute Binding applied only to vital layers. Through our analysis of FLUX, we identify the critical layers responsible for instance attribute rendering and apply Hard Image Attribute Binding only in these layers, using soft binding in the others. This approach ensures precise control while preserving image quality. Evaluations on the COCO-POS and COCO-MIG benchmarks demonstrate that DreamRenderer improves the Image Success Ratio by 17.7% over FLUX and enhances the performance of layout-to-image models like GLIGEN and 3DIS by up to 26.8%.',
    tags: ['Text-to-Image', 'Instance Control', 'Attribute Binding'],
    pdfUrl: '#'
  },
  {
    id: 'p5',
    title: 'RAT: Adversarial Attacks on Deep Reinforcement Agents for Targeted Behaviors',
    authors: ["Fengshuo Bai", "Runze Liu", "Yali Du", "Ying Wen", "Yaodong Yang"],
    venue: 'AAAI 2025',
    year: 2025,
    abstract: 'Evaluating deep reinforcement learning (DRL) agents against targeted behavior attacks is critical for assessing their robustness. These attacks aim to manipulate the victim into specific behaviors that align with the attacker’s objectives, often bypassing traditional reward-based defenses. Prior methods have primarily focused on reducing cumulative rewards; however, rewards are typically too generic to capture complex safety requirements effectively. As a result, focusing solely on reward reduction can lead to suboptimal attack strategies, particularly in safety-critical scenarios where more precise behavior manipulation is needed. To address these challenges, we propose RAT, a method designed for universal, targeted behavior attacks. RAT trains an intention policy that is explicitly aligned with human preferences, serving as a precise behavioral target for the adversary. Concurrently, an adversary manipulates the victim\'s policy to follow this target behavior. To enhance the effectiveness of these attacks, RAT dynamically adjusts the state occupancy measure within the replay buffer, allowing for more controlled and effective behavior manipulation. Our empirical results on robotic simulation tasks demonstrate that RAT outperforms existing adversarial attack algorithms in inducing specific behaviors. Additionally, RAT shows promise in improving agent robustness, leading to more resilient policies. We further validate RAT by guiding Decision Transformer agents to adopt behaviors aligned with human preferences in various MuJoCo tasks, demonstrating its effectiveness across diverse tasks.',
    tags: ['DRL', 'Adversarial Attacks'],
    pdfUrl: 'https://ojs.aaai.org/index.php/AAAI/article/view/33696/35851'
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-08',
    date: '2025-11',
    title: 'Fengshuo Bai and Jing Gao Awarded the Zhenyi Scholarship',
    content: 'Fengshuo Bai and Jing Gao have been awarded the prestigious Zhenyi Scholarship in recognition of their outstanding academic performance and research contributions.',
    category: 'Award'
  },
  {
    id: 'news-07',
    date: '2025-09',
    title: 'STAR Accepted to NeurIPS 2025',
    content: '"STAR: Efficient Preference-based Reinforcement Learning via Dual Regularization" by Fengshuo Bai, Rui Zhao, Hongming Zhang, Sijia Cui, Shao Zhang, Bo Xu, Lei Han, Ying Wen, and Yaodong Yang has been accepted to NeurIPS 2025.',
    category: 'Publication'
  },
  {
    id: 'news-06',
    date: '2025-09',
    title: 'DexFlyWheel Accepted to NeurIPS 2025 (Spotlight)',
    content: '"DexFlyWheel: A Scalable and Self-improving Data Generation Framework for Dexterous Manipulation" by Kefei Zhu, Fengshuo Bai, YuanHao Xiang, Yishuai Cai, Xinglin Chen, Ruochong Li, Xingtao Wang, Hao Dong, Yaodong Yang, Xiaopeng Fan, and Yuanpei Chen has been accepted to NeurIPS 2025 as a Spotlight paper.',
    category: 'Publication'
  },
  {
    id: 'news-05',
    date: '2025-09',
    title: 'Jing Gao won the 3rd Prize at AI for Science Hackathon · Beijing',
    content: 'Won the 3rd Prize for "Autonomous Scientific Problem Solving Agent based on MCP Protocol", demonstrating flexibility and scalability in handling open-ended complex tasks.',
    category: 'Award'
  },
  {
    id: 'news-04',
    date: '2025-08',
    title: 'Jing Gao won the 3rd Prize at AI for Science Hackathon · Shanghai',
    content: 'Won the 3rd Prize for "Intelligent Experimental Agent based on MCP Protocol", enabling natural language-driven automation for complex laboratory equipment orchestration.',
    category: 'Award'
  },
  {
    id: 'news-03',
    date: '2025-07',
    title: 'DreamRenderer Accepted to ICCV 2025',
    content: '"DreamRenderer: Taming Multi-Instance Attribute Control in Large-Scale Text-to-Image Models" by Dewei Zhou, Mingwei Li, Zongxin Yang, and Yi Yang has been accepted to ICCV 2025.',
    category: 'Publication'
  },
  {
    id: 'news-02',
    date: '2025-04',
    title: 'TSGS Accepted to ACM MM 2025',
    content: '"TSGS: Improving Gaussian Splatting for Transparent Surface Reconstruction via Normal and De-lighting Priors" by Mingwei Li, Pu Pang, Hehe Fan, Hua Huang, and Yi Yang has been accepted to ACM MM 2025.',
    category: 'Publication'
  },
  {
    id: 'news-01',
    date: '2024-11',
    title: 'RAT Accepted to AAAI 2025 (Oral)',
    content: '"RAT: Adversarial Attacks on Deep Reinforcement Agents for Targeted Behaviors" by Fengshuo Bai, Runze Liu, Yali Du, Ying Wen, and Yaodong Yang has been accepted to AAAI 2025 for Oral presentation.',
    category: 'Publication'
  }
];