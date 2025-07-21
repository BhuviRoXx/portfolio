import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              I'm currently an SDE Intern at Kriyadocs, working with Node.js to develop scalable APIs, backend features, and writing test cases and documentation. I’ve gained hands-on experience with AWS services like Lambda, CloudWatch, and S3.
            </p>

            <p className="text-muted-foreground">
              I'm a Smart India Hackathon 2024 Finalist, where I tackled real-world challenges with innovative tech solutions. I also build full-stack MERN projects and have a strong foundation in C++ and OOP. I enjoy solving problems, learning new tools, and building efficient, user-focused applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Structures & Algorithms</h4>
                  <p className="text-muted-foreground">
                    Solving complex problems efficiently with consistent practice on platforms like LeetCode
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Object-Oriented Programming</h4>
                  <p className="text-muted-foreground">
                   Writing clean, modular, and reusable code in C++ with a strong grasp of OOP principles
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic full-stack applications using MERN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};