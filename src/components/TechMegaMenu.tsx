import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend",
    skills: [
      "React", "Angular", "Vue.js", "Next.js", "Nuxt.js", "Svelte", "SvelteKit",
      "Gatsby", "Remix", "Astro", "HTML5", "CSS3", "Sass/SCSS", "Tailwind CSS",
      "Bootstrap", "Material UI", "Chakra UI", "Ant Design", "Styled Components",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js", "Express.js", "NestJS", "Fastify", "Python", "Django",
      "Flask", "FastAPI", "Java", "Spring Boot", "C#", ".NET Core",
      "Go", "Gin", "Ruby", "Ruby on Rails", "PHP", "Laravel",
      "Rust", "Elixir",
    ],
  },
  {
    title: "Mobile",
    skills: [
      "React Native", "Flutter", "Swift", "SwiftUI", "Kotlin",
      "Jetpack Compose", "Xamarin", "Ionic", "Capacitor", "Expo",
      "Objective-C", "Dart", "MAUI",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
      "Terraform", "Ansible", "Jenkins", "GitHub Actions", "GitLab CI/CD",
      "CircleCI", "ArgoCD", "Helm", "Pulumi", "CloudFormation",
      "Nginx", "Apache", "Serverless Framework",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch",
      "DynamoDB", "Cassandra", "Firebase", "Supabase", "CockroachDB",
      "MariaDB", "SQL Server", "Oracle DB", "Neo4j", "InfluxDB",
      "Couchbase", "FaunaDB", "PlanetScale",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI API",
      "LangChain", "Hugging Face", "Pandas", "NumPy", "OpenCV",
      "NLTK", "spaCy", "MLflow", "Weights & Biases", "JAX",
      "Stable Diffusion", "LLaMA", "RAG Pipelines",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "Apache Spark", "Apache Kafka", "Airflow", "dbt", "Snowflake",
      "Databricks", "BigQuery", "Redshift", "Flink", "Presto",
      "Hive", "ETL Pipelines", "Data Lakes",
    ],
  },
  {
    title: "Blockchain & Web3",
    skills: [
      "Solidity", "Ethereum", "Hardhat", "Web3.js", "Ethers.js",
      "Rust (Solana)", "Smart Contracts", "DeFi Protocols", "NFT Development",
      "IPFS", "The Graph", "Chainlink",
    ],
  },
  {
    title: "Testing & QA",
    skills: [
      "Jest", "Cypress", "Playwright", "Selenium", "Vitest",
      "React Testing Library", "Mocha", "JUnit", "Pytest", "Postman",
      "K6", "Artillery", "Appium",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Confluence",
      "Figma", "Storybook", "Vercel", "Netlify", "Heroku",
      "DigitalOcean", "Cloudflare", "Sentry", "Datadog",
      "New Relic", "Grafana", "Prometheus",
    ],
  },
];

const totalSkills = techCategories.reduce((sum, cat) => sum + cat.skills.length, 0);

const TechMegaMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="fixed top-20 left-0 right-0 pt-2 px-6 z-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mega-menu-overlay rounded-2xl p-6 max-h-[70vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: "1px solid hsl(0 0% 100% / 0.08)" }}>
            <div>
              <h3 className="text-lg font-heading font-bold" style={{ color: "hsl(0 0% 100%)" }}>
                Our Technology Stack
              </h3>
              <p className="text-xs mt-1" style={{ color: "hsl(0 0% 50%)" }}>
                {totalSkills}+ technologies we work with
              </p>
            </div>
            <Link
              to="/technologies"
              className="text-xs font-medium px-4 py-2 rounded-lg transition-colors"
              style={{
                color: "hsl(192 91% 52%)",
                border: "1px solid hsl(192 91% 52% / 0.3)",
              }}
            >
              View All →
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techCategories.map((category) => (
              <div key={category.title}>
                <h4
                  className="text-xs font-heading font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "hsl(192 91% 52%)" }}
                >
                  {category.title}
                </h4>
                <div className="space-y-1">
                  {category.skills.map((skill) => (
                    <Link
                      key={skill}
                      to="/technologies"
                      className="block py-1 text-xs transition-colors duration-150"
                      style={{ color: "hsl(0 0% 60%)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(0 0% 100%)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 60%)")}
                    >
                      {skill}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechMegaMenu;
