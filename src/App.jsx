import React, { useState } from 'react';
import { Menu, Pen, X } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Users,
  Code,
  Database,
  Globe,
  Trophy,
  Star,
  Calendar,
  Award
} from 'lucide-react';

const Portfolio = () => {
  const [navOpen, setNavOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2.4 }
  };

  const staggerChildren = {
    animate: {
      transition: {
          staggerChildren: 0.8
      }
    }
  };

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Achievements'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              <a href='/profile/'  initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Abdallah Naser </a>
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-gray-300 focus:outline-none"
              >
                {navOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md w-full px-4 py-6 flex flex-col items-center space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setNavOpen(false)}
                className="text-white text-lg hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Left Column: Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className=" flex justify-center mb-6 md:mb-0"
    >
      <img
        src="/profile/pro.jpg"
        alt="Profile"
        className="w-84 h-84 rounded-full object-cover mt-[90px] md:mt-0"
      />
    </motion.div>

    {/* Right Column: Text */}
    <div className=" text-center md:text-left lg:ml-[100px]" >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1.6 }}
        className="text-5xl md:text-7xl font-bold mb-4 pb-2"
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Abdallah Naser
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.6 }}
        className="text-xl md:text-2xl text-gray-300 mb-6 "
      >
        Full-Stack Developer
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-300 mb-6"
      >
        Programming Instructor
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.6 }}
        className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"
      >
        <a
          href="mailto:abdallahnser555@gmail.com"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300"
        >
          <Mail size={20} />
          abdallahnser555@gmail.com
        </a>
        <a
          href="tel:+201284012545"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300"
        >
          <Phone size={20} />
          +20 128 401 2545
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex justify-center md:justify-start gap-4"
      >
        <a
          href="https://github.com/AbdallahNaser"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/abd-allah-naser"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
        >
          <Linkedin size={24} />
        </a>
      </motion.div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bachelor in Computer Science with a solid background in software engineering and
              intensive training in Full-Stack Web Development from ITI. A proficient Full-Stack
              Developer with a strong focus on backend engineering. Currently working as a Session
              Lead at Udacity, mentoring developers and guiding them through advanced programming concepts
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 pb-2">
                <MapPin className="text-blue-400" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Bachelor in Computer Science</h4>
                  <p className="text-gray-300">Assiut University • 2020 – 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">ITI Full-Stack Web Development</h4>
                  <p className="text-gray-300">Information Technology Institute • Feb-June 2025</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 pb-2">
                <Users className="text-purple-400 " />
                Current Role
              </h3>
              <div>
                <h4 className="font-semibold text-lg">Full-Stack Developer</h4>
                <p className="text-gray-300 mb-2">UpCode Company • Dec 2024 - Present</p>
                <p className="text-sm text-gray-400">
                  Skilled in developing high-performance and secure backend solutions using Laravel, PHP, MySQL, Django, Python, and PostgreSQL. Expertise in building scalable RESTful APIs and optimizing database performance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Session Lead</h4>
                <p className="text-gray-300 mb-2">Udacity • Jul 2025 - Present</p>
                <p className="text-sm text-gray-400">
                  Leading live sessions, mentoring students, clarifying complex concepts,
                  and promoting active engagement to enhance the overall learning experience.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                title: "Session Lead",
                company: "Udacity",
                period: "Jul 2025 - Present",
                description: "Leading live sessions, mentoring students, clarifying complex concepts, and promoting active engagement to enhance the overall learning experience.",
                icon: <Users className="text-blue-400" />
              },
              {
                title: "Backend Developer",
                company: "UpCode Company",
                period: "Sept 2023 – Present",
                description: "Skilled in developing high-performance and secure backend solutions using Laravel, PHP, MySQL, Django, Python, and PostgreSQL. Expertise in building scalable RESTful APIs and optimizing database performance.",
                icon: <Database className="text-green-400" />
              },
              {
                title: "Frontend Developer (React)",
                company: "UpCode Company",
                period: "Dec 2024 - Present",
                description: "Skilled in building dynamic UIs with React, using reusable components, state management, and API integration. Continuously learning best practices.",
                icon: <Code className="text-purple-400" />
              },
              {
                title: "Programming Coach",
                company: "Egyptian Olympiad In Informatics",
                period: "Jul 2023 - Present",
                description: "EOI, held by Egypt's Ministry of Communications and IT, is the top national competition in algorithms, programming, and problem-solving for school students.",
                icon: <Award className="text-yellow-400" />
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Hospital Management System",
                description: "Developed and managed the backend using Laravel, implemented RESTful APIs ensuring a scalable system, providing efficient functionalities tailored to healthcare needs.",
                tech: ["Laravel", "MySQL", "Postman"],
                launch: "October 2023",
                icon: <Database className="text-blue-400" />
              },
              {
                title: "Charity Crowdfunding Platform",
                description: "Built a full-stack charity crowdfunding platform with Django REST and React, enabling project creation, donations, and secure user workflows with JWT and async email.",
                tech: ["Django", "Django REST", "PostgreSQL", "React"],
                launch: "Recent",
                icon: <Globe className="text-green-400" />
              },
              {
                title: "Courses Website",
                description: "Developed and maintained a Laravel backend with RESTful APIs for course enrollment, video streaming, and quizzes.",
                tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
                launch: "February 2024",
                icon: <Code className="text-purple-400" />
              },
              {
                title: "E-learning platform (for teacher)",
                description: "Developed and maintained a Website using Laravel as a backend and Laravel Blade as a frontend ,control three types of Users and make the Teacher able to post his content videos and video streaming, and quizzes.",
                tech: ["Laravel", "Laravel Blade", "MySQL", "Bootstrap", "JavaScript"],
                launch: "Sept 2025",
                icon: <Code className="text-pink-400" />
              },
              {
                title: "He & She Social Mobile App",
                description: "Customization of a social media app as the Client wanted and Creating the dashboard for the Admin, Developed and maintained the Backend using Laravel and the Frontend using Laravel Blade for Admin Dashboard.",
                tech: ["Laravel", "Laravel Blade", "MySQL", "Bootstrap", "JavaScript", "RESTful APIs"],
                launch: "Oct 2025",
                icon: <Pen className="text-pink-400" />
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400">Launched: {project.launch}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                category: "Programming Languages",
                skills: ["C++", "Python", "Java", "JavaScript", "PHP"]
              },
              {
                category: "Backend Technologies",
                skills: ["Laravel", "Django", "Django REST Framework", "RESTful APIs"]
              },
              {
                category: "Frontend Technologies",
                skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
              },
              {
                category: "Databases",
                skills: ["MySQL", "PostgreSQL"]
              },
              {
                category: "Tools & Others",
                skills: ["GitHub", "Linux", "OOP", "Data Structures", "Postman"]
              }
            ].map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h4 className="text-xl font-bold mb-4 text-center pb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm border border-white/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Volunteering
            </h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "ECPC Qualifications 2022",
                description: "Ranked 25th out of 200 teams, representing Upper Egypt universities in the Collegiate Programming Contest.",
                icon: <Trophy className="text-yellow-400" />
              },
              {
                title: "ECPC 2024 Participation",
                description: "Participated in ECPC 2024 and it was an enjoyable experience with a wonderful team and highly qualified coaches.",
                icon: <Star className="text-blue-400" />
              },
              {
                title: "Problem Solving",
                description: "Solved +1000 problems on various online judges, demonstrating strong algorithmic thinking and programming skills.",
                icon: <Code className="text-green-400" />
              },
              {
                title: "Mentorship",
                description: "Mentor at ICPC Assiut University (Oct 2022 – Oct 2024), teaching C++, problem solving techniques, algorithms and data structures.",
                icon: <Users className="text-purple-400" />
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-full">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent pb-4">
              Let's Connect
            </h3>
            <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1.6 }}
        className="flex flex-wrap justify-center md:justify-center gap-4 mb-6"
      >
        <a
          href="mailto:abdallahnser555@gmail.com"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300"
        >
          <Mail size={20} />
          abdallahnser555@gmail.com
        </a>
        <a
          href="tel:+201284012545"
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300"
        >
          <Phone size={20} />
          +20 128 401 2545
        </a>
      </motion.div>
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:abdallahnser555@gmail.com" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                <Mail size={24} />
              </a>
              <a href="https://github.com/AbdallahNaser" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/abd-allah-naser" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Abdallah Naser. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
