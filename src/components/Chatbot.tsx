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
  const { t, i18n } = useTranslation();
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
            ? '您好！👋 我们能为您提供什么帮助？' 
            : 'Hi! 👋 How can we help you today?',
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
    const input = userInput.toLowerCase();
    const isZh = i18n.language === 'zh';

    // Services related
    if (input.includes('service') || input.includes('服务')) {
      return isZh
        ? '我们提供多种服务：定制软件开发、Web和移动应用开发、云和DevOps、人工智能和机器学习、网络安全服务、质量保证和测试、IT咨询、数字化转型。您对哪个服务感兴趣？'
        : 'We offer various services: Custom Software Development, Web & Mobile App Development, Cloud & DevOps, AI & Machine Learning, Cybersecurity Services, QA & Testing, IT Consulting, and Digital Transformation. Which service interests you?';
    }

    // Pricing
    if (input.includes('price') || input.includes('cost') || input.includes('价格') || input.includes('费用')) {
      return isZh
        ? '我们的定价取决于项目范围和要求。请联系我们的团队进行免费咨询，我们将为您提供定制报价。电话：+1 (555) 000-1234 或邮箱：hello@nexatech.com'
        : 'Our pricing depends on project scope and requirements. Please contact our team for a free consultation and we\'ll provide a custom quote. Call: +1 (555) 000-1234 or Email: hello@nexatech.com';
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
        ? 'NexaTech成立于2010年，已发展成为一家全球技术强企，在30多个国家为企业提供服务，拥有2000多名优秀工程师。我们专注于为企业提供可扩展、安全和智能的软件解决方案。'
        : 'NexaTech was founded in 2010 and has grown into a global technology powerhouse serving enterprises across 30+ countries with 2,000+ talented engineers. We focus on delivering scalable, secure, and intelligent software solutions for businesses.';
    }

    // Vision/Mission
    if (input.includes('vision') || input.includes('mission') || input.includes('愿景') || input.includes('使命')) {
      return isZh
        ? '我们的愿景是构建明天的数字基础设施。我们的使命是通过技术创新帮助企业实现数字化转型，让各种规模的企业都能获得高质量、可靠且可扩展的技术服务。'
        : 'Our vision is to build the digital infrastructure of tomorrow. Our mission is to help businesses achieve digital transformation through technology innovation, making high-quality, reliable, and scalable technology services accessible to enterprises of all sizes.';
    }

    // Location/Office
    if (input.includes('office') || input.includes('location') || input.includes('where') || input.includes('办公室') || input.includes('地址')) {
      return isZh
        ? '我们在全球设有办事处：\n🇺🇸 旧金山（美洲总部）\n🇬🇧 伦敦（欧洲、中东和非洲总部）\n🇸🇬 新加坡（亚太总部）\n🇦🇪 迪拜（中东和非洲办事处）'
        : 'We have offices worldwide:\n🇺🇸 San Francisco (Americas HQ)\n🇬🇧 London (EMEA HQ)\n🇸🇬 Singapore (APAC HQ)\n🇦🇪 Dubai (MEA Office)';
    }

    // Careers
    if (input.includes('career') || input.includes('job') || input.includes('hiring') || input.includes('职位') || input.includes('招聘')) {
      return isZh
        ? '我们一直在寻找有才华的工程师、设计师和领导者加入我们的团队！请访问我们的职业页面查看空缺职位，或发送简历至 careers@nexatech.com'
        : 'We\'re always looking for talented engineers, designers, and leaders to join our team! Visit our careers page to see open positions or send your resume to careers@nexatech.com';
    }

    // AI/Technology
    if (input.includes('ai') || input.includes('artificial intelligence') || input.includes('machine learning') || input.includes('人工智能') || input.includes('机器学习')) {
      return isZh
        ? '我们提供全面的AI和机器学习服务，包括：定制ML模型、自然语言处理、计算机视觉、预测分析和推荐引擎。我们可以帮助您利用AI的力量推动业务增长。'
        : 'We offer comprehensive AI & Machine Learning services including: Custom ML models, Natural Language Processing, Computer Vision, Predictive Analytics, and Recommendation Engines. We can help you leverage AI to drive business growth.';
    }

    // Greeting
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('你好') || input.includes('您好')) {
      return isZh
        ? '您好！很高兴为您服务。我可以帮您了解我们的服务、定价、公司信息或回答任何其他问题。请问有什么可以帮您的吗？'
        : 'Hello! Great to hear from you. I can help you learn about our services, pricing, company information, or answer any other questions. What would you like to know?';
    }

    // Default response
    return isZh
      ? '感谢您的留言！我们的团队将尽快回复您。如需立即帮助，请致电 +1 (555) 000-1234 或发送邮件至 hello@nexatech.com。您也可以询问我关于我们的服务、定价、公司信息等问题。'
      : 'Thank you for your message! Our team will get back to you shortly. For immediate assistance, please call +1 (555) 000-1234 or email hello@nexatech.com. You can also ask me about our services, pricing, company info, and more!';
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
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

      {/* Chat Window */}
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
            {/* Header */}
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

            {/* Messages */}
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

                {/* Input */}
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
                      onKeyPress={handleKeyPress}
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
