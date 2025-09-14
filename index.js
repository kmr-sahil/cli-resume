#!/usr/bin/env node
import chalk from "chalk";

console.log(chalk.bold.cyan("\nSahil Kumar Shaw\n"));

console.log(
  chalk.white("📧  ") + "11.sahil.kmr@gmail.com   " +
  chalk.white("🔗  LinkedIn: ") + "https://www.linkedin.com/in/sahil-kumar-5b781721b/   " +
  chalk.white("🌐  Portfolio: ") + "https://sahilkmr.in   " +
  chalk.white("📱  ") + "+91 9163420585\n"
);

// ------------------- SUMMARY -------------------
console.log(chalk.bold.yellow("Summary"));
console.log(
  "A software engineer with over a year of hands-on experience in building full-stack systems, " +
  "with a strong eye for design. Continuously upskilling in modern tech stacks, " +
  "contributing to multiple fast-paced, cross-functional projects with measurable success.\n"
);

// ------------------- WORK EXPERIENCE -------------------
console.log(chalk.bold.yellow("Work Experience"));

console.log(
  chalk.bold("Software Engineer, Ginger Media Group") +
    chalk.gray("  |  Aug 2025 – Present")
);
console.log(" - Built GoGig.in Executor Chat Flow, reduced WhatsApp dependency, handled 2000+ teams across 35+ cities, processing 1TB+ logs monthly.");
console.log(" - Built offline campaign tracker with React, AWS Lambda, Serverless, Node.js, TypeScript, WebSockets, S3.");
console.log(" - Refactored codebases for reusability & scalability.");
console.log(" - Integrated Telegram bots, WhatsApp flows, Zoho, and Runo webhooks.\n");

console.log(
  chalk.bold("Software Engineer Intern, Lamarr (Remote)") +
    chalk.gray("  |  Sep 2024 – Nov 2024")
);
console.log(" - Worked on POS, LMS, and clinic booking systems; 25% faster delivery.");
console.log(" - Built end-to-end solutions with PostgreSQL, Express.js, Next.js, AWS.");
console.log(" - Designed UI/UX improvements increasing client satisfaction by 30%.\n");

console.log(
  chalk.bold("Frontend Engineer Intern, PaliPoint (Remote)") +
    chalk.gray("  |  Mar 2024 – Jul 2024")
);
console.log(" - Collaborated with designers & devs, accelerated MVP delivery by 20%.");
console.log(" - Built production-grade codebase using TypeScript, Material-UI, Next.js.");
console.log(" - Boosted funding prospects by 75% via UI polish.\n");

// ------------------- SKILLS -------------------
console.log(chalk.bold.yellow("Skills"));
console.log(
  chalk.white("Languages: ") + "Java, JavaScript, TypeScript, HTML, CSS\n" +
  chalk.white("Frameworks: ") + "React.js, React Native, Next.js, Tailwind, Framer Motion, Node.js, Vitest\n" +
  chalk.white("Version Control & Tools: ") + "Git, AWS, Docker, Bash, GitHub Actions\n" +
  chalk.white("Database: ") + "MongoDB, MySQL, PostgreSQL, Redis\n" +
  chalk.white("Soft Skills: ") + "Rapid Skill Acquisition, Continuous Improvement, Design Thinking, Team Collaboration\n"
);

// ------------------- PROJECTS -------------------
console.log(chalk.bold.yellow("Projects"));

console.log(
  chalk.bold("Get Jobs Today") + chalk.gray("  |  https://github.com/jobfinder456/Frontend")
);
console.log(" - LinkedIn-like job posting app (Next.js, Express.js, PostgreSQL, AWS).");
console.log(" - Managed 5k+ monthly active users from 5+ countries.\n");

console.log(
  chalk.bold("Prep-ai") + chalk.gray("  |  https://use-prep-ai.vercel.app/")
);
console.log(" - AI-powered mock interview platform with real-time simulation.");
console.log(" - Integrated voice input & transcription for scoring.\n");

// ------------------- EDUCATION -------------------
console.log(chalk.bold.yellow("Education"));

console.log(
  chalk.bold("B.Tech (Information Technology)") +
    chalk.gray("  |  Techno India College of Technology  |  2021 – 2025")
);
console.log(" CGPA: 7.59/10\n");

console.log(
  chalk.bold("Higher Secondary (Computer Science)") +
    chalk.gray("  |  Bhawanipur Gujarati Education Society (ISC)  |  2019 – 2021")
);
console.log(" 85%\n");

console.log(
  chalk.bold("Secondary School (Science)") +
    chalk.gray("  |  Loyola High School (ICSE)  |  2005 – 2019")
);
console.log(" 83%\n");

console.log(chalk.green("✨ Resume printed successfully!"));
