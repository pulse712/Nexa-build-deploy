import { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ChatIcon from '@/assets/Logo/Icon.png';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when chatbot opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: i18n.language === 'zh' 
            ? '您好！我们能为您提供什么帮助？' 
            : 'Hi! How can we help you today?',
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length, i18n.language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    const isZh = i18n.language === 'zh';

    // Goodbye/Exit
    if (input === 'bye' || input === 'goodbye' || input === 'bye!' || input === 'goodbye!') {
      return isZh ? '感谢您联系 NexaTech！祝您有美好的一天！' : 'Thank you for contacting NexaTech! Have a great day!';
    }

    // Basic greetings - exact matches first
    if (input === 'hi' || input === 'hi!') {
      return isZh ? '您好！欢迎来到 NexaTech。今天我能为您提供什么帮助？' : 'Hello! Welcome to NexaTech. How can I assist you today?';
    }
    if (input === 'hello' || input === 'hello!') {
      return isZh ? '您好！欢迎来到 NexaTech。今天我能为您提供什么帮助？' : 'Hello! Welcome to NexaTech. How can I assist you today?';
    }
    if (input === 'how are you?' || input === 'how are you') {
      return isZh ? '我很好，谢谢。你呢？' : "I'm good, thank you. How about you?";
    }
    if (input === "what's your name?" || input === "what's your name" || input === 'what is your name?' || input === 'what is your name') {
      return isZh ? '我是 NexaTech 客服助手' : "I'm NexaTech Support Assistant";
    }
    if (input === 'where are you from?' || input === 'where are you from') {
      return isZh ? '我来自 NexaTech，为全球客户服务' : "I'm from NexaTech, serving clients worldwide";
    }
    if (input === 'nice to meet you' || input === 'nice to meet you!') {
      return isZh ? '我也很高兴认识您' : 'Nice to meet you too';
    }
    if (input === "how's your day?" || input === "how's your day" || input === 'how is your day?' || input === 'how is your day') {
      return isZh ? '进展顺利，谢谢！' : "It's going well, thanks!";
    }
    if (input === 'what do you do?' || input === 'what do you do') {
      return isZh ? '我是客服助手，帮助您了解 NexaTech 的服务' : "I'm a support assistant helping you learn about NexaTech's services";
    }
    if (input === 'do you speak english?' || input === 'do you speak english') {
      return isZh ? '是的，我会说英语和中文' : 'Yes, I speak English and Chinese';
    }
    if (input === 'see you later' || input === 'see you later!' || input === 'see you' || input === 'see you!') {
      return isZh ? '再见！' : 'See you!';
    }
    if (input === 'good morning' || input === 'good morning!') {
      return isZh ? '早上好！' : 'Good morning!';
    }
    if (input === 'good afternoon' || input === 'good afternoon!') {
      return isZh ? '下午好！' : 'Good afternoon!';
    }
    if (input === 'good evening' || input === 'good evening!') {
      return isZh ? '晚上好！' : 'Good evening!';
    }
    if (input === 'good night' || input === 'good night!') {
      return isZh ? '晚安，睡个好觉' : 'Good night, sleep well';
    }
    if (input === 'thank you' || input === 'thank you!' || input === 'thanks' || input === 'thanks!') {
      return isZh ? '不客气' : "You're welcome";
    }
    if (input === 'sorry' || input === 'sorry!') {
      return isZh ? '没关系' : "That's okay";
    }
    if (input === 'excuse me' || input === 'excuse me!') {
      return isZh ? '是的？有什么可以帮您的吗？' : 'Yes? How can I help you?';
    }

    // Services & Offerings
    if (input.includes('what services') || input.includes('services do you offer') || input.includes('what do you offer')) {
      return isZh
        ? '我们提供IT外包服务，包括软件开发、Web和移动应用开发、QA测试、DevOps、云解决方案和IT咨询。'
        : 'We provide IT outsourcing services including software development, web and mobile app development, QA testing, DevOps, cloud solutions, and IT consulting.';
    }

    // Dedicated Developers
    if (input.includes('dedicated developer') || input.includes('专职开发')) {
      return isZh
        ? '是的，我们提供专门为您的项目工作的专职开发人员。您可以随时扩大或缩小团队规模。'
        : 'Yes, we provide dedicated developers who work exclusively on your project. You can scale your team up or down anytime.';
    }

    // Technologies
    if (input.includes('what technolog') || input.includes('which technolog') || input.includes('tech stack') || input.includes('技术栈')) {
      return isZh
        ? '我们使用广泛的技术，包括JavaScript（React、Node.js）、Python、Java、.NET、PHP、移动端（iOS、Android、Flutter）以及AWS、Azure和Google Cloud等云平台。'
        : 'We work with a wide range of technologies including JavaScript (React, Node.js), Python, Java, .NET, PHP, mobile (iOS, Android, Flutter), and cloud platforms like AWS, Azure, and Google Cloud.';
    }

    // Website Development
    if (input.includes('custom website') || input.includes('build a website') || input.includes('website development') || input.includes('网站开发')) {
      return isZh
        ? '当然可以！我们专门构建符合您业务需求的定制网站。'
        : 'Absolutely! We specialize in building custom websites tailored to your business needs.';
    }

    // Mobile App Development
    if (input.includes('mobile app') || input.includes('develop app') || input.includes('移动应用')) {
      return isZh
        ? '是的，我们为iOS和Android开发原生和跨平台移动应用程序。'
        : 'Yes, we develop both native and cross-platform mobile applications for iOS and Android.';
    }

    // Pricing & Cost
    if (input.includes('how much') || input.includes('project cost') || input.includes('多少钱')) {
      return isZh
        ? '费用取决于您的需求、时间表和团队规模。您想分享更多详细信息以获得免费估价吗？'
        : 'The cost depends on your requirements, timeline, and team size. Would you like to share more details for a free estimate?';
    }

    // Free Quote
    if (input.includes('free quote') || input.includes('free estimate') || input.includes('免费报价')) {
      return isZh
        ? '当然可以！请提供您的项目详细信息，我们的团队将为您准备免费报价。'
        : 'Of course! Please provide your project details, and our team will prepare a free quote for you.';
    }

    // Development Process
    if (input.includes('development process') || input.includes('how do you develop') || input.includes('开发流程')) {
      return isZh
        ? '我们的流程包括需求分析、规划、设计、开发、测试、部署和持续支持。'
        : 'Our process includes requirement analysis, planning, design, development, testing, deployment, and ongoing support.';
    }

    // Project Timeline
    if (input.includes('how long') || input.includes('project take') || input.includes('timeline') || input.includes('需要多长时间')) {
      return isZh
        ? '这取决于项目范围。小型项目可能需要几周，而大型项目可能需要几个月。'
        : 'It depends on the project scope. Small projects may take weeks, while larger ones can take several months.';
    }

    // UI/UX Design
    if (input.includes('ui/ux') || input.includes('design') || input.includes('界面设计')) {
      return isZh
        ? '是的，我们的设计团队创建用户友好且视觉吸引力强的界面。'
        : 'Yes, our design team creates user-friendly and visually appealing interfaces.';
    }

    // Team Integration
    if (input.includes('work with my team') || input.includes('existing team') || input.includes('integrate') || input.includes('团队协作')) {
      return isZh
        ? '是的，我们可以与您的内部团队无缝集成并有效协作。'
        : 'Yes, we can seamlessly integrate with your in-house team and collaborate effectively.';
    }

    // Industries
    if (input.includes('what industries') || input.includes('which industries') || input.includes('行业')) {
      return isZh
        ? '我们服务于各个行业，包括金融科技、医疗保健、电子商务、教育和初创企业。'
        : 'We serve various industries including fintech, healthcare, e-commerce, education, and startups.';
    }

    // NDA
    if (input.includes('nda') || input.includes('non-disclosure') || input.includes('保密协议')) {
      return isZh
        ? '是的，我们很乐意签署保密协议以保护您的数据和想法。'
        : 'Yes, we are happy to sign a Non-Disclosure Agreement to protect your data and ideas.';
    }

    // Team Location
    if (input.includes('team located') || input.includes('where is your team') || input.includes('团队位置')) {
      return isZh
        ? '我们的团队在全球运营，在多个地区设有办事处和开发人员。'
        : 'Our team operates globally, with offices and developers in multiple regions.';
    }

    // Pricing Model
    if (input.includes('pricing model') || input.includes('payment model') || input.includes('定价模式')) {
      return isZh
        ? '我们提供灵活的模式，如按小时计费、固定价格和专职团队定价。'
        : 'We offer flexible models such as hourly, fixed-price, and dedicated team pricing.';
    }

    // Post-Delivery Support
    if (input.includes('support after') || input.includes('maintenance') || input.includes('售后支持')) {
      return isZh
        ? '是的，我们在项目交付后提供持续的维护和支持。'
        : 'Yes, we provide ongoing maintenance and support after project delivery.';
    }

    // What is Outsourcing
    if (input.includes('what is outsourcing') || input.includes('什么是外包')) {
      return isZh
        ? '外包意味着雇用外部团队来处理您的IT需求，帮助您节省时间和成本。'
        : 'Outsourcing means hiring an external team to handle your IT needs, helping you save time and costs.';
    }

    // Why Choose Us
    if (input.includes('why choose') || input.includes('why should i') || input.includes('为什么选择')) {
      return isZh
        ? '我们结合了经验丰富的开发人员、灵活的合作模式、透明的沟通和高质量的交付。'
        : 'We combine experienced developers, flexible engagement models, transparent communication, and high-quality delivery.';
    }

    // Quality Assurance
    if (input.includes('ensure quality') || input.includes('quality assurance') || input.includes('质量保证')) {
      return isZh
        ? '我们遵循严格的QA流程，包括手动和自动化测试。'
        : 'We follow strict QA processes, including manual and automated testing.';
    }

    // Fix Existing Software
    if (input.includes('fix') || input.includes('existing software') || input.includes('existing system') || input.includes('修复')) {
      return isZh
        ? '是的，我们可以分析、修复和改进您现有的系统。'
        : 'Yes, we can analyze, fix, and improve your existing system.';
    }

    // Cloud Services
    if (input.includes('cloud service') || input.includes('cloud migration') || input.includes('云服务')) {
      return isZh
        ? '是的，我们提供云迁移、部署和管理服务。'
        : 'Yes, we offer cloud migration, deployment, and management services.';
    }

    // DevOps
    if (input.includes('devops')) {
      return isZh
        ? 'DevOps是一种改善开发和运营团队之间协作的实践，以更快、更可靠地交付软件。'
        : 'DevOps is a practice that improves collaboration between development and operations teams to deliver faster and more reliable software.';
    }

    // How to Start
    if (input.includes('how do i start') || input.includes('how to start') || input.includes('get started') || input.includes('如何开始')) {
      return isZh
        ? '只需分享您的项目需求，我们将指导您完成后续步骤。'
        : 'Simply share your project requirements, and we\'ll guide you through the next steps.';
    }

    // Schedule a Call
    if (input.includes('schedule') || input.includes('book a call') || input.includes('arrange a call') || input.includes('预约通话')) {
      return isZh
        ? '是的！请选择一个方便的时间，我们将安排与我们专家的通话。'
        : 'Yes! Please choose a convenient time, and we\'ll arrange a call with our expert.';
    }

    // Startups
    if (input.includes('startup') || input.includes('初创')) {
      return isZh
        ? '是的，我们喜欢与初创企业合作，帮助将想法变为现实。'
        : 'Yes, we love working with startups and helping bring ideas to life.';
    }

    // MVP Development
    if (input.includes('mvp') || input.includes('minimum viable product') || input.includes('最小可行产品')) {
      return isZh
        ? '是的，我们可以快速构建最小可行产品来验证您的想法。'
        : 'Yes, we can build a Minimum Viable Product quickly to validate your idea.';
    }

    // Scale Team
    if (input.includes('scale')) {
      return isZh
        ? '您可以根据需要轻松扩大或缩小团队规模。'
        : 'You can easily scale your team up or down based on your needs.';
    }

    // Payment Methods
    if (input.includes('payment method') || input.includes('how to pay') || input.includes('支付方式')) {
      return isZh
        ? '我们接受银行转账、信用卡和其他安全的支付方式。'
        : 'We accept bank transfers, credit cards, and other secure payment methods.';
    }

    // Project Managers
    if (input.includes('project manager') || input.includes('项目经理')) {
      return isZh
        ? '是的，每个项目都由经验丰富的项目经理管理。'
        : 'Yes, each project is managed by an experienced project manager.';
    }

    // Communication
    if (input.includes('how do you communicate') || input.includes('沟通方式')) {
      return isZh
        ? '我们使用Slack、Zoom、Jira和电子邮件等工具进行透明沟通。'
        : 'We use tools like Slack, Zoom, Jira, and email for transparent communication.';
    }

    // Track Progress
    if (input.includes('track progress') || input.includes('project progress') || input.includes('跟踪进度')) {
      return isZh
        ? '是的，我们提供定期更新和项目跟踪工具的访问权限。'
        : 'Yes, we provide regular updates and access to project tracking tools.';
    }

    // Onboarding Process
    if (input.includes('onboarding') || input.includes('入职流程')) {
      return isZh
        ? '我们从需求收集、团队分配和项目启动开始。'
        : 'We start with requirement gathering, team allocation, and project kickoff.';
    }

    // 24/7 Support
    if (input.includes('24/7') || input.includes('24 hours') || input.includes('全天候')) {
      return isZh
        ? '是的，根据服务协议，我们可以提供24/7支持。'
        : 'Yes, depending on the service agreement, we can provide 24/7 support.';
    }

    // Not Satisfied
    if (input.includes('not satisfied') || input.includes('unsatisfied') || input.includes('不满意')) {
      return isZh
        ? '我们与您密切合作并进行修订以确保满意度。'
        : 'We work closely with you and make revisions to ensure satisfaction.';
    }

    // System Migration
    if (input.includes('migrate') || input.includes('migration') || input.includes('迁移')) {
      return isZh
        ? '是的，我们提供系统和云迁移服务，停机时间最短。'
        : 'Yes, we provide system and cloud migration services with minimal downtime.';
    }

    // Security Services
    if (input.includes('security') || input.includes('安全')) {
      return isZh
        ? '是的，我们实施最佳实践以确保您的软件安全。'
        : 'Yes, we implement best practices to ensure your software is secure.';
    }

    // General Services
    if (input.includes('service') || input.includes('服务')) {
      return isZh
        ? '我们提供IT外包服务，包括软件开发、Web和移动应用开发、QA测试、DevOps、云解决方案和IT咨询。您对哪个服务感兴趣？'
        : 'We provide IT outsourcing services including software development, web and mobile app development, QA testing, DevOps, cloud solutions, and IT consulting. Which service interests you?';
    }

    // Pricing
    if (input.includes('price') || input.includes('cost') || input.includes('价格') || input.includes('费用')) {
      return isZh
        ? '我们的定价取决于项目范围和要求。请联系我们的团队进行免费咨询，我们将为您提供定制报价。'
        : 'Our pricing depends on project scope and requirements. Please contact our team for a free consultation and we\'ll provide a custom quote.';
    }

    // Contact
    if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('联系') || input.includes('电话') || input.includes('邮箱')) {
      return isZh
        ? '您可以通过以下方式联系我们：\n📧 邮箱：hello@nexatech.com\n📞 电话：+1 (555) 000-1234\n🕐 我们将在24小时内回复'
        : 'You can reach us at:\n📧 Email: hello@nexatech.com\n📞 Phone: +1 (555) 000-1234\n🕐 We respond within 24 hours';
    }

    // About company
    if (input.includes('about') || input.includes('company') || input.includes('关于') || input.includes('公司')) {
      return isZh
        ? 'NexaTech成立于2010年，已发展成为一家全球技术强企，在30多个国家为企业提供服务，拥有2000多名优秀工程师。'
        : 'NexaTech was founded in 2010 and has grown into a global technology powerhouse serving enterprises across 30+ countries with 2,000+ talented engineers.';
    }

    // Mission (specific)
    if (input.includes('mission') && !input.includes('vision')) {
      return isZh
        ? '我们的使命\n通过创新、可扩展和安全的技术解决方案赋能全球企业，加速数字化转型并创造持久的商业价值。\n\n• 为企业加速数字化转型\n• 提供可衡量的业务成果\n• 构建随雄心壮志而扩展的技术'
        : 'Our Mission is to empower global enterprises with innovative, scalable, and secure technology solutions that accelerate digital transformation and create lasting business value.\n\n• Accelerate digital transformation for enterprises\n• Deliver measurable business outcomes\n• Build technology that scales with ambition';
    }

    // Vision (specific)
    if (input.includes('vision') && !input.includes('mission')) {
      return isZh
        ? '我们的愿景\n成为世界上最值得信赖的技术合作伙伴，以工程卓越、创新领导力和对客户成功的坚定承诺而闻名。\n\n• 树立工程卓越的全球标准\n• 开创下一代技术解决方案\n• 与世界级组织建立持久的合作伙伴关系'
        : 'Our Vision\nTo be the world\'s most trusted technology partner, known for engineering excellence, innovation leadership, and an unwavering commitment to client success.\n\n• Set the global standard for engineering excellence\n• Pioneer next-generation technology solutions\n• Build enduring partnerships with world-class organizations';
    }

    // Both Vision & Mission
    if ((input.includes('vision') && input.includes('mission')) || input.includes('愿景') || input.includes('使命')) {
      return isZh
        ? '我们的使命：通过创新、可扩展和安全的技术解决方案赋能全球企业，加速数字化转型并创造持久的商业价值。\n\n我们的愿景：成为世界上最值得信赖的技术合作伙伴，以工程卓越、创新领导力和对客户成功的坚定承诺而闻名。'
        : 'Our Mission is to empower global enterprises with innovative, scalable, and secure technology solutions that accelerate digital transformation and create lasting business value.\n\nOur Vision is to be the world\'s most trusted technology partner, known for engineering excellence, innovation leadership, and an unwavering commitment to client success.';
    }

    // Location/Office
    if (input.includes('office') || input.includes('location') || input.includes('办公室') || input.includes('地址')) {
      return isZh
        ? '我们在全球设有办事处：\n🇺🇸 旧金山（美洲总部）\n🇬🇧 伦敦（欧洲、中东和非洲总部）\n🇸🇬 新加坡（亚太总部）\n🇦🇪 迪拜（中东和非洲办事处）'
        : 'We have offices worldwide:\n🇺🇸 San Francisco (Americas HQ)\n🇬🇧 London (EMEA HQ)\n🇸🇬 Singapore (APAC HQ)\n🇦🇪 Dubai (MEA Office)';
    }

    // Careers
    if (input.includes('career') || input.includes('job') || input.includes('hiring') || input.includes('职位') || input.includes('招聘')) {
      return isZh
        ? '我们一直在寻找有才华的工程师、设计师和领导者加入我们的团队！请访问我们的职业页面或发送简历至 careers@nexatech.com'
        : 'We\'re always looking for talented engineers, designers, and leaders to join our team! Visit our careers page or send your resume to careers@nexatech.com';
    }

    // AI/Technology
    if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning') || input.includes('人工智能') || input.includes('机器学习')) {
      return isZh
        ? '我们提供全面的AI和机器学习服务，包括：定制ML模型、自然语言处理、计算机视觉、预测分析和推荐引擎。'
        : 'We offer comprehensive AI & Machine Learning services including: Custom ML models, Natural Language Processing, Computer Vision, Predictive Analytics, and Recommendation Engines.';
    }

    // General greeting (for variations)
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('你好') || input.includes('您好')) {
      return isZh
        ? '您好！很高兴为您服务。我可以帮您了解我们的服务、定价、公司信息或回答任何其他问题。'
        : 'Hello! Great to hear from you. I can help you learn about our services, pricing, company information, or answer any other questions.';
    }

    // Default response
    return isZh
      ? '感谢您的留言！我们的团队将尽快回复您。如需立即帮助，请致电 +1 (555) 000-1234 或发送邮件至 hello@nexatech.com。'
      : 'Thank you for your message! Our team will get back to you shortly. For immediate assistance, please call +1 (555) 000-1234 or email hello@nexatech.com.';
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = inputValue;
    setInputValue('');

    // Simulate bot response with intelligent reply
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(userInput),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <img src={ChatIcon} alt="Chat" className="w-8 h-8" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-5 right-5 z-50 w-[320px] rounded-xl shadow-2xl overflow-hidden"
            style={{
              background: 'hsl(222 47% 11%)',
              border: '1px solid hsl(0 0% 100% / 0.1)',
              maxHeight: isMinimized ? '55px' : '450px',
            }}
          >
            <div
              className="flex items-center justify-between p-2.5"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <img src={ChatIcon} alt="Chat" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm">
                    {i18n.language === 'zh' ? 'NexaTech 客服' : 'NexaTech Support'}
                  </h3>
                  <p className="text-xs text-white/80">
                    {i18n.language === 'zh' ? '在线' : 'Online now'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <Minimize2 size={13} className="text-white" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <X size={13} className="text-white" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div
                  className="p-2.5 space-y-2.5 overflow-y-auto"
                  style={{ height: '310px', background: 'hsl(222 47% 8%)' }}
                >
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg px-2.5 py-2 ${
                          message.sender === 'user'
                            ? 'rounded-br-sm'
                            : 'rounded-bl-sm'
                        }`}
                        style={{
                          background:
                            message.sender === 'user'
                              ? 'hsl(234 89% 54%)'
                              : 'hsl(222 47% 14%)',
                          color: 'hsl(0 0% 100%)',
                        }}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                        <p
                          className="text-xs mt-1"
                          style={{
                            color:
                              message.sender === 'user'
                                ? 'hsl(0 0% 100% / 0.7)'
                                : 'hsl(0 0% 60%)',
                          }}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div
                  className="p-2.5 border-t"
                  style={{
                    background: 'hsl(222 47% 11%)',
                    borderColor: 'hsl(0 0% 100% / 0.1)',
                  }}
                >
                  <div className="flex items-end gap-2">
                    <textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={i18n.language === 'zh' ? '输入消息...' : 'Type message...'}
                      rows={1}
                      className="flex-1 px-2.5 py-2 rounded-lg text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary/50"
                      style={{
                        background: 'hsl(222 47% 8%)',
                        border: '1px solid hsl(0 0% 100% / 0.1)',
                        color: 'hsl(0 0% 100%)',
                      }}
                    />
                    <button
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      className="p-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background: 'var(--gradient-primary)' }}
                    >
                      <Send size={14} className="text-white" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
